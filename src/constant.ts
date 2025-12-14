import medqueuePicture from "@/assets/medqueue.png"
import gakdaSorumePicture from "@/assets/gakdaSorumeKoltim.png"
import ektmPicture from "@/assets/ektm-web.png"
import htmlLogo from "@/assets/html5.png"
import cssLogo from "@/assets/css3.svg"
import jsLogo from "@/assets/javascript.png"
import nodeJSLogo from "@/assets/nodejs.png"
import tsLogo from "@/assets/Typescript_logo_2020.svg.png"
import tailwindLogo from "@/assets/Tailwindpng.png"
import reactLogo from "@/assets/react.svg"
import reactNativeLogo from "@/assets/reactNative.png"

export const summarry = 'Experienced Frontend Developer with a strong foundation in academia, freelance development, and technical support. Proficient in React.js, React Native, and Express.js, with a focus on building responsive, user-friendly web applications. Known for clear communication, mentoring, and cross-functional collaboration. Past projects include a medical online queue app, an Android app for a civil service unit, and an electronic student identity system. Former assistant lecturer at Halu Oleo University and technical support staff in the health tech industry, bringing a unique blend of technical skill and user-centric thinking.'

export const workExperince = [
    {
        jobTitle: 'Assistant Lecturer',
        company: 'Halu Oleo University',
        startDate: 'Jan 2020',
        endDate: 'Jun 2022',
        status: 'Parttime'
    },
    {
        jobTitle: 'Junior ERP Support',
        company: 'PT Hashmicro Solusi Indonesia',
        startDate: 'Feb 2022',
        endDate: 'Jun 2022',
        status: 'Internship'
    },
    {
        jobTitle: 'Android Developer',
        company: 'Satpol PP Kolaka Timur',
        startDate: 'Nov 2023',
        endDate: 'Jan 2024',
        status: 'Freelance'
    },
    {
        jobTitle: 'Technical Support Staff',
        company: 'PT Profaskes Softech Indonesia',
        startDate: 'Jan 2023',
        endDate: 'Jun 2024',
        status: 'Fulltime'
    },
    {
        jobTitle: 'Frontend Developer',
        company: 'Pasarpolis Indonesia',
        startDate: 'Jun 2024',
        endDate: 'Dec 2024',
        status: 'Internship'
    },
    {
        jobTitle: 'Frontend Developer',
        company: 'Pasarpolis Indonesia',
        startDate: 'Dec 2024',
        endDate: 'Present',
        status: 'Fulltime'
    },
]

export const projects = [
    {
        title: 'Medqueue',
        image: medqueuePicture,
        description: 'Medqueue is a medical online queue service. Medqueue offers seamless appointment scheduling, eliminating the frustration of long wait times and cumbersome phone calls. With Medqueue, users can effortlessly book appointments online from anywhere, at any time. The technology stack that I use are Typescript, React.JS, Tailwind CSS, Shadcn UI. See the source on ',
        links: [
            { text: 'Github', url: 'https://github.com/Medqueue-Alta/Medqueue-FE' }
        ]
    },
    {
        title: 'Gakda Sorume Koltim',
        image: gakdaSorumePicture,
        description: 'Gakda Sorume Koltim is a crucial tool for East Kolaka citizens to report local law violations, enabling the Civil Police Unit to take prompt action on each citizen\'s report. Developed using TypeScript and React Native, this app ensures seamless reporting and swift response to community concerns. Visit the ',
        links: [
            { text: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.anonymous.gakdaSorumeKoltim' }
        ]
    },
    {
        title: 'E-KTM',
        image: ektmPicture,
        description: 'EKTM (Electronic Student Identity Card) addresses the challenges faced by university administrations, particularly in reducing wait times for lost or replacement student cards. Leveraging a comprehensive technology stack comprising JavaScript, Express.js, MongoDB, React.js, React Native, and Tailwind CSS, EKTM streamlines the process of issuing and managing student identity cards. This innovative solution ensures efficient and seamless card management, empowering students and administrators alike. Explore the source code for the ',
        links: [
            { text: 'API', url: 'https://github.com/maliefrr/ektm' },
            { text: 'Frontend', url: 'https://github.com/maliefrr/ektmFrontend' },
            { text: 'Android', url: 'https://github.com/maliefrr/ektmApp' }
        ]
    }
]

export const skills = [
    { image: htmlLogo, alt: 'HTML5' },
    { image: cssLogo, alt: 'CSS3' },
    { image: jsLogo, alt: 'JavaScript' },
    { image: tsLogo, alt: 'TypeScript' },
    { image: tailwindLogo, alt: 'Tailwind CSS' },
    { image: nodeJSLogo, alt: 'Node.js' },
    { image: reactLogo, alt: 'React' },
    { image: reactNativeLogo, alt: 'React Native' }
]