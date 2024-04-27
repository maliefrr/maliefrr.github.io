import {useRef} from 'react';
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"


function App() {
  const navbarRef = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
      navbarRef.current!.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="overflow-x-hidden">
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[rgba(0,0,0)]">
        <h4 className="text-3xl">🖐</h4>
        <h3 className="text-[#c7d5e0] text-2xl">I am Mohamad Alief Rizky Ramadhan</h3>
        <h4 className="text-[#c7d5e0] text-3xl">A Frontend Engineer</h4>
        <Separator className="max-w-[20%] mt-3"/>
        <Button className="mt-3 bg-[#2a475e] hover:bg-[#1b2838] duration-300" onClick={handleClick}>Get To Know Me 👇</Button>
    </div>
    <div className="sticky top-0 z-50 w-full bg-[#171a21] backdrop-blur supports-[backdrop-filter]:bg-[#171a21] px-5" ref={navbarRef}>
      <nav className="flex justify-between items-center">
        <h1 className="text-xl text-white">Mohamad Alief Rizky R</h1>
        <ul className="flex justify-around w-[60%] p-4 text-white">
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Home</li>
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Experience</li>
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Project</li>
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Skills</li>
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </div>
      <div className="h-[1000px]"></div>
    </div>
  )
}

export default App
