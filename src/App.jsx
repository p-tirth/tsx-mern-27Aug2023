import CharacterDetailCard from "./pages/CharacterDetailCard"
import Home from "./pages/Home"
import {Routes , Route} from "react-router-dom"

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Details' element={<CharacterDetailCard/>}/>
    </Routes>
    </>
  )
}