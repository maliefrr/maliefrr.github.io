import {useRef} from 'react';
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"


function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#171A21]" ref={heroRef}>
        <h4 className="text-3xl">🖐</h4>
        <h3 className="text-[#c7d5e0] text-2xl">I am Mohamad Alief Rizky Ramadhan</h3>
        <h4 className="text-[#c7d5e0] text-3xl">A Frontend Engineer</h4>
        <Separator className="max-w-[20%] mt-3"/>
        <Button className="mt-3 bg-[#2a475e] hover:bg-[#1b2838] duration-300" onClick={() => scrollToRef(homeRef)}>Get To Know Me 👇</Button>
    </div>
    <div className="fixed top-0 z-50 w-full bg-[#171a21] backdrop-blur supports-[backdrop-filter]:bg-[#171a21] px-5">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl text-white hover:text-[#c7d5e0] duration-300 cursor-pointer" onClick={() => scrollToRef(heroRef)}>Mohamad Alief Rizky R</h1>
        <ul className="flex justify-around w-[60%] p-4 text-white">
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer" onClick={() => scrollToRef(homeRef)}>Home</li>
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer" onClick={() => scrollToRef(expRef)}>Experience</li>
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Project</li>
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Skills</li>
          <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </div>
      <div className="flex p-5 justify-around items-center mt-10 h-screen" ref={homeRef}>
        <div className='max-w-[40%]'>
          <h3 className='text-2xl mb-3'>Professional Summary</h3>
          <p className='text-justify'>Experienced Frontend Engineer with a background in academia and technical support roles. Proficient in React.js, React Native, and Express.js. Skilled in explaining concepts, socializing, and public speaking. Notable achievements include developing a medical online queue app and an electronic identity system for students, as well as creating an Android app for a civil service police unit. As an assistant lecturer at Halu Oleo University, successfully taught and mentored students. As a Technical Support Staff at a medical record company, provided effective technical assistance and support.</p>
        </div>
        <img src="./img/profile.jpg" alt="" className='max-w-[30%] rounded-full'/>
      </div>
      <div className='mt-5'>
        {/* <!-- component --> */}
          <div className="min-h-screen bg-[#1b2838] py-6 flex flex-col justify-center sm:py-12" ref={expRef}>
            <h1 className='text-center text-3xl mb-5 text-white'>Work Experience</h1>
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

              <div className="relative text-gray-700 antialiased text-sm font-semibold">

                {/* <!-- Vertical bar running through middle --> */}
                <div className="hidden sm:block w-1 bg-[#2a475e] absolute h-full left-1/2 transform -translate-x-1/2"></div>

                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-5 bg-white rounded shadow">
                          <h3 className='text-xl'>Technical Support Staff</h3>
                          <h4 className='text'>PT Profaskes Softech Indonesia</h4>
                          <h5>Fulltime</h5>
                          <h6 className='text-slate-400'>Jan 2023 - Present</h6>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-[#1b2838] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    </div>
                  </div>
                </div>

                {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                          <h3 className='text-xl'>Android Developer</h3>
                          <h4 className='text'>Satpol PP Kolaka Timur</h4>
                          <h5>Freelance</h5>
                          <h6 className='text-slate-400'>Nov 2023 - Jan 2024</h6>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-[#1b2838] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    </div>
                  </div>
                </div>

                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="p-4 bg-white rounded shadow">
                          <h3 className='text-xl'>Junior ERP Support</h3>
                          <h4 className='text'>PT Hashmicro Solusi Indonesia</h4>
                          <h5>Internship</h5>
                          <h6 className='text-slate-400'>Feb 2022 - Jun 2022</h6>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-[#1b2838] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    </div>
                  </div>
                </div>

                {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                <div className="mt-6 sm:mt-0">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 bg-white rounded shadow">
                          <h3 className='text-xl'>Assistant Lecturer</h3>
                          <h4 className='text'>Halu Oleo University</h4>
                          <h5>Parttime</h5>
                          <h6 className='text-slate-400'>Jan 2020 - Jun 2022</h6>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-[#1b2838] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    </div>
                  </div>
                </div>



              </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default App
