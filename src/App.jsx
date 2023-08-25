import CharecterList from "./components/CharecterList"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <div className="">
        <Navbar/>
        <div className="flex justify-center items-center">
        <CharecterList/>
        </div>
      </div>
    </>
  )
}