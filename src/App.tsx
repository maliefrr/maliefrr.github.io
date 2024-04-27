import {useRef} from 'react';
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from './components/ui/card';
import profilePicture from "@/assets/profile.jpg"
import ektmPicture from "@/assets/ektm-web.png"
import gakdaSorumePicture from "@/assets/gakdaSorumeKoltim.png"
import medqueuePicture from "@/assets/medqueue.png"


function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="fixed top-0 z-50 w-full bg-[#171a21] backdrop-blur supports-[backdrop-filter]:bg-[#171a21] px-5">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl text-white hover:text-[#c7d5e0] duration-300 cursor-pointer" onClick={() => scrollToRef(heroRef)}>Mohamad Alief Rizky R</h1>
          <ul className="flex justify-around w-[60%] p-4 text-white">
            <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer" onClick={() => scrollToRef(homeRef)}>Home</li>
            <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer" onClick={() => scrollToRef(expRef)}>Experience</li>
            <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer" onClick={() => scrollToRef(projectRef)}>Project</li>
            <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Skills</li>
            <li className="hover:text-[#c7d5e0] duration-300 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#171A21]" ref={heroRef}>
        <h4 className="text-3xl">🖐</h4>
        <h3 className="text-[#c7d5e0] text-2xl">I am Mohamad Alief Rizky Ramadhan</h3>
        <h4 className="text-[#c7d5e0] text-3xl">A Frontend Engineer</h4>
        <Separator className="max-w-[20%] mt-3"/>
        <Button className="mt-3 bg-[#2a475e] hover:bg-[#1b2838] duration-300" onClick={() => scrollToRef(homeRef)}>Get To Know Me 👇</Button>
    </div>
      <div className="flex p-5 justify-around items-center mt-10 h-screen" ref={homeRef}>
        <div className='max-w-[40%]'>
          <h3 className='text-2xl mb-3'>Professional Summary</h3>
          <p className='text-justify'>Experienced Frontend Engineer with a background in academia and technical support roles. Proficient in React.js, React Native, and Express.js. Skilled in explaining concepts, socializing, and public speaking. Notable achievements include developing a medical online queue app and an electronic identity system for students, as well as creating an Android app for a civil service police unit. As an assistant lecturer at Halu Oleo University, successfully taught and mentored students. As a Technical Support Staff at a medical record company, provided effective technical assistance and support.</p>
        </div>
        <img src={profilePicture} alt="" className='max-w-[30%] rounded-full'/>
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
          {/* end of timeline */}
      <div className='mt-5 h-screen flex flex-col justify-center p-4' ref={projectRef}>
        <h1 className="text-3xl text-center mb-3">Projects</h1>
        <div className='grid grid-cols-3 mt-3 gap-3'>
            <Card>
              <CardTitle>
                <img src={medqueuePicture} alt="" />
              </CardTitle>
              <CardDescription className='p-4'>
                <h4 className='text-xl text-black text-center mb-3'>Medqueue</h4>
                <p className='text-justify'>Medqueue is a medical online queue service. Medqueue offers seamless appointment scheduling, eliminating the frustration of long wait times and cumbersome phone calls. With Medqueue, users can effortlessly book appointments online from anywhere, at any time. The technology stack that I use are Typescript, React.JS, Tailwind CSS, Shadcn UI. See the source on <a href="https://github.com/Medqueue-Alta/Medqueue-FE" target='_blank' className='cursor-pointer underline'>Github</a> </p>
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>
                <img src={gakdaSorumePicture} alt="" />
              </CardTitle>
              <CardDescription className='p-4'>
                <h4 className='text-xl text-black text-center mb-3'>Gakda Sorume Koltim</h4>
                <p className='text-justify'>Gakda Sorume Koltim is a crucial tool for East Kolaka citizens to report local law violations, enabling the Civil Police Unit to take prompt action on each citizen's report. Developed using TypeScript and React Native, this app ensures seamless reporting and swift response to community concerns. Visit the <a  href="https://play.google.com/store/apps/details?id=com.anonymous.gakdaSorumeKoltim" target='_blank' className='cursor-pointer underline'>Google Play Store</a>  to explore the app's functionalities firsthand. </p>
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>
                <img src={ektmPicture} alt="" />
              </CardTitle>
              <CardDescription className='p-4'>
                <h4 className='text-xl text-black text-center mb-3'>E-KTM</h4>
                <p className='text-justify'>EKTM (Electronic Student Identity Card) addresses the challenges faced by university administrations, particularly in reducing wait times for lost or replacement student cards. Leveraging a comprehensive technology stack comprising JavaScript, Express.js, MongoDB, React.js, React Native, and Tailwind CSS, EKTM streamlines the process of issuing and managing student identity cards. This innovative solution ensures efficient and seamless card management, empowering students and administrators alike. Explore the source code for the <a  href="https://github.com/maliefrr/ektm" target='_blank' className='cursor-pointer underline'>API</a> , <a  href="https://github.com/maliefrr/ektmFrontend" target='_blank' className='cursor-pointer underline'>Frontend</a>, and the<a  href="https://github.com/maliefrr/ektmApp" target='_blank' className='cursor-pointer underline'> Android</a> </p>
              </CardDescription>
            </Card>
        </div>
      </div>
      {/* End of project section */}
    </div>
  )
}

export default App