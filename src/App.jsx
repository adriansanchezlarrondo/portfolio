import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import tailwindLogo from './assets/tailwind.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Tailwind - Vite - React</h1>
      <div>
        <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </>
  )
}

export default App
