import React, { useState } from 'react';

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario, como enviar los datos a un servidor
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-teal-300 to-lime-50 shadow-md rounded px-16 pt-6 pb-8">
        <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 text-base font-bold mb-2">Nombre</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-base font-bold mb-2">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <div className="mb-6">
            <label htmlFor="mensaje" className="block text-gray-700 text-base font-bold mb-2">Mensaje</label>
            <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            ></textarea>
        </div>
        <div className="flex items-center justify-between">
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Enviar
            </button>
        </div>
    </form>
  );
}