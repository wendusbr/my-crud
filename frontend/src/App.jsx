import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreatePerson from "./pages/CreatePerson"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create-person" element={<CreatePerson />}></Route>
    </Routes>
  )
}

export default App
