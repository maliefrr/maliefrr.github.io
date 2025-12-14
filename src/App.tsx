import {useRef} from 'react';
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from './components/ui/card';
import profilePicture from "@/assets/profile.jpg"
import mailIcon from "@/assets/email.svg"
import locationIcon from "@/assets/location-pin.svg"
import phoneIcon from "@/assets/phone-call.svg"
import { summarry, workExperince, projects, skills } from './constant';
import { Navbar } from './components/Navbar';


function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="fixed top-0 z-50 w-full bg-[#171a21] backdrop-blur supports-[backdrop-filter]:bg-[#171a21] px-5">
        <Navbar   
        scrollToRef={scrollToRef}
        heroRef={heroRef}
        homeRef={homeRef}
        expRef={expRef}
        projectRef={projectRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        />
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#171A21]" ref={heroRef} id='hero'>
        <h4 className="text-3xl">🖐</h4>
        <h3 className="text-[#c7d5e0] text-2xl">I am Mohamad Alief Rizky Ramadhan</h3>
        <h4 className="text-[#c7d5e0] text-3xl">A Software Engineer</h4>
        <Separator className="max-w-[20%] mt-3"/>
        <Button className="mt-3 bg-[#2a475e] hover:bg-[#1b2838] duration-300" onClick={() => scrollToRef(homeRef)}>Get To Know Me 👇</Button>
    </div>
      <div className="flex flex-col-reverse lg:flex-row p-5 justify-end gap-4 lg:justify-around items-center mt-10 h-screen" ref={homeRef} id='home'>
        <div className='lg:max-w-[40%]'>
          <h3 className='text-lg lg:text-2xl mb-3'>Professional Summary</h3>
          <p className='text-sm lg:text-lg text-justify'>{summarry}</p>
        </div>
        <img src={profilePicture} alt="" className='max-w-[30%] rounded-full'/>
      </div>
      <div className='mt-5'>
        {/* <!-- component --> */}
          <div className="min-h-screen bg-[#1b2838] py-6 flex flex-col justify-center sm:py-12" ref={expRef} id='experience'>
            <h1 className='text-center text-3xl mb-5 text-white'>Work Experience</h1>
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

              <div className="relative text-gray-700 antialiased text-sm font-semibold">

                {/* <!-- Vertical bar running through middle --> */}
                <div className="hidden sm:block w-1 bg-[#2a475e] absolute h-full left-1/2 transform -translate-x-1/2"></div>

                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                {
                  workExperince.slice().reverse().map((item,index) => {
                    return (
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                      <div className="flex flex-col sm:flex-row items-center">
                        <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full mx-auto items-center`}>
                          <div className={`w-full sm:w-1/2 sm:${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                            <div className="p-5 bg-white rounded shadow">
                              <h3 className='text-xl'>{item.jobTitle}</h3>
                              <h4 className='text'>{item.company}</h4>
                              <h5>{item.status}</h5>
                              <h6 className='text-slate-400'>{item.startDate} - {item.endDate}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-full bg-[#1b2838] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        </div>
                      </div>
                    </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
      </div>
          {/* end of timeline */}
      <div className='mt-10 min-h-screen flex flex-col justify-center p-4 pt-16' ref={projectRef} id='projects'>
        <h1 className="text-3xl text-center mb-3">Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-3'>
            {projects.map((project) => (
                <Card key={project.title}>
                    <CardTitle>
                        <img src={project.image} alt="" />
                    </CardTitle>
                    <CardDescription className='p-4'>
                        <h4 className='text-xl text-black text-center mb-3'>{project.title}</h4>
                        <p className='text-justify'>
                            {project.description}
                            {project.links.map((link, index) => (
                                <span key={link.url}>
                                    <a href={link.url} target='_blank' className='cursor-pointer underline'>{link.text}</a>
                                    {index < project.links.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </p>
                    </CardDescription>
                </Card>
            ))}
        </div>
      </div>
      {/* End of project section */}
      <div className='h-screen flex flex-col items-center bg-[#1b2838] p-4 justify-center' ref={skillsRef}>
        <h1 className="text-center text-3xl mb-5 text-white">Skills</h1>
        <div className="grid grid-cols-4 gap-5 items-center">
          {skills.map((skill) => (
            <img key={skill.alt} src={skill.image} alt={skill.alt} width={150} className='grayscale opacity-80 hover:grayscale-0 hover:opacity-100 duration-300'/>
          ))}
        </div>
      </div>
      {/* end of skills section */}
      <div className='bg-[#171a21] p-5 text-white' ref={contactRef}>
        <div className='mb-5 p-5'>
          <h4 className='text-2xl mb-3'>
            Contact me
          </h4>
          <h5 className='mb-3'>
            <a href="mailto:maliefrr14@gmail.com">
              <div className="flex items-center gap-2">
                <img src={mailIcon} alt="" width={20}/>
                maliefrr14@gmail.com
              </div>
            </a></h5>
            <h5 className='mb-3'>
              <a href="https://wa.me/+6285156684730">
                <div className="flex items-center gap-2">
                  <img src={phoneIcon} alt="" width={20}/>
                  +6285156684730
                </div>
              </a>
            </h5>
            <h5>
                <div className="flex items-start gap-2">
                  <img src={locationIcon} alt="" width={20}/>
                  <div>
                    <p>Jl. Raya Sedati Agung No 46</p>
                    <p>Sidoarjo</p>
                  </div>
                </div>
            </h5>
          <h5></h5>
        </div>
        <Separator className='mb-5 '/>
        <div className="w-full">
                    <div className="flex items-center justify-center mb-2">
                        {/* <!-- instagram --> */}
                        <a href="https://instagram.com/maliefrr" target="_blank" className="w-9 h-9 flex justify-center items-center border border-slate-300 mr-3 rounded-full hover:border-[#cd486b] hover:bg-[#cd486b] hover:text-white transition duration-300">
                            <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                        </a>
                        {/* <!-- linkedin --> */}
                        <a href="https://www.linkedin.com/in/maliefrr/" target="_blank" className="w-9 h-9 flex justify-center items-center border border-slate-300 mr-3 rounded-full hover:border-sky-500 hover:bg-sky-600 hover:text-white transition duration-300">
                            <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        {/* <!-- github --> */}
                        <a href="https://github.com/maliefrr" target="_blank" className="w-9 h-9 flex justify-center items-center border border-slate-300 mr-3 rounded-full hover:border-[#1b2838] hover:bg-[#1b2838] hover:text-white transition duration-300">
                            <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </a>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default App
