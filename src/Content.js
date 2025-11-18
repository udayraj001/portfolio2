// import images
import Hero_person from "./assets/images/Hero/person2.png";

import figma from "./assets/images/Skills/figma.png";
import aws from "./assets/images/Skills/aws.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import c from "./assets/images/Skills/c.png";
import cockroach from "./assets/images/Skills/cockroach.png";
import cpp from "./assets/images/Skills/cpp.png";
import django from "./assets/images/Skills/django.png";
import docker from "./assets/images/Skills/docker.png";
import electron from "./assets/images/Skills/electron.png";
import git from "./assets/images/Skills/git.svg";
import mongodb from "./assets/images/Skills/mongodb.svg";
import postgresql from "./assets/images/Skills/postgresql.svg";
import python from "./assets/images/Skills/python.png";
import react from "./assets/images/Skills/react.png";
import tailwind from './assets/images/Skills/icon-tailwindcss.svg'
import socket from "./assets/images/Skills/socket.svg";
import typescript from "./assets/images/Skills/icon-typescript.svg";
import java from "./assets/images/Skills/java.png";
import jira from "./assets/images/Skills/jira-original.png";
import nextjs from "./assets/images/Skills/nextjs.png";
import nodejs from "./assets/images/Skills/node.png";
import mysql from "./assets/images/Skills/mysql.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/homely.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/vcw.png";
import project4 from "./assets/images/Projects/myimaginity.png";
import project5 from "./assets/images/Projects/thc.png";
import project6 from "./assets/images/Projects/bt.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrGithub, GrLinkedin, GrMail, GrTwitter } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Developer",
    firstName: "Udayraj",
    LastName: "Ghorpade",
    btnText: "Open to Work",
    image: Hero_person,
    hero_content: [
      {
        count: "6+",
        text: "Years of Experinse in Software Development development",
      },
      {
        count: "50+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
     {
  name: "React Js",
  para: "UI library",
  logo: react,
},
{
  name: "Node js",
  para: "Backend runtime",
  logo: nodejs,
},
{
  name: "Next js",
  para: "React framework",
  logo: nextjs,
},
{
  name: "TypeScript",
  para: "Typed JavaScript",
  logo: typescript,
},
{
  name: "MySQL",
  para: "SQL database",
  logo: mysql,
},
{
  name: "Amazon Web Services",
  para: "Cloud services",
  logo: aws,
},
{
  name: "MongoDB",
  para: "NoSQL database",
  logo: mongodb,
},
{
  name: "Django",
  para: "Python framework",
  logo: django,
},
{
  name: "Docker",
  para: "App containers",
  logo: docker,
},
{
  name: "Electron Js",
  para: "Desktop apps",
  logo: electron,
},
{
  name: "Git",
  para: "Version control",
  logo: git,
},
{
  name: "PostgreSQL",
  para: "Advanced database",
  logo: postgresql,
},
{
  name: "Python",
  para: "Programming language",
  logo: python,
},
{
  name: "C",
  para: "System language",
  logo: c,
},
{
  name: "TailwindCSS",
  para: "CSS framework",
  logo: tailwind,
},
{
  name: "Socket.io",
  para: "Real-time comms",
  logo: socket,
},
{
  name: "Figma",
  para: "Design tool",
  logo: figma,
},
{
  name: "C++",
  para: "High-performance",
  logo: cpp,
},
{
  name: "Bootstrap",
  para: "UI framework",
  logo: bootstrap,
},
{
  name: "CockroachDB",
  para: "Distributed SQL",
  logo: cockroach,
},
{
  name: "Java",
  para: "OOP language",
  logo: java,
},
{
  name: "Jira",
  para: "Project tracking",
  logo: jira,
},

    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
  title: "Full Stack Development",
  para: "Building complete web applications from frontend to backend.",
  logo: services_logo1,
},
{
  title: "Software Development",
  para: "Designing and developing custom software solutions for your needs.",
  logo: services_logo2,
},
{
  title: "AI / ML Enthusiast",
  para: "Exploring the future of intelligent systems..",
  logo: services_logo3,
},
{
  title: "Custom Software Development",
  para: "Designing and developing tailored software solutions for businesses and startups.",
  logo: services_logo1,
}


    ],
  },
 Projects: {
  title: "Projects",
  subtitle: "MY CREATION",
  image: person_project,
  project_content: [
    {
      title: "Homely (Real-Estate Website)",
      image: project1,
      demo_link: "https://homely-red.vercel.app/",
      read_more_link: "https://github.com/user/homely",
    },
    {
      title: "Context Management System",
      image: project2,
      demo_link: "https://cms-demo.com",
      read_more_link: "https://github.com/user/cms",
    },
    {
      title: "VictoryCineworld",
      image: project3,
      demo_link: "https://victorycineworld.com/",
      read_more_link: "https://github.com/user/victorycineworld",
    },
    {
      title: "MyImaginity",
      image: project4,
      demo_link: "https://www.myimaginity.com/",
      read_more_link: "https://github.com/user/myimaginity",
    },
    {
      title: "TheHealingCenter",
      image: project5,
      demo_link: "https://thehealingcenter.in/",
      read_more_link: "https://github.com/user/thehealingcenter",
    },
    {
      title: "Bodhtarot",
      image: project6,
      demo_link: "https://bodhtarot.com/",
      read_more_link: "https://github.com/user/bodhtarot",
    },
  ],
},

  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with him was incredibly smooth. He built a modern, clean, and elegant website that perfectly showcases my architectural projects. I’ve already started getting more inquiries because clients can now see my work professionally. Highly recommended!”",
        img: avatar1,
        name: "Gaurav Pawar",
      },
      {
        review:
          "“I loved the way he designed my portfolio site. The animations, layout, and colours were exactly what I imagined. He also guided me on how to update photos on my own. Overall, very talented and humble developer!”",
        img: avatar2,
        name: "Sandip Kankal",
      },
      {
        review:
          "“I needed a website that looked premium and helped me get more clients. He understood my requirements immediately and delivered a website that was fast, responsive, and trust-building. His work has increased my leads noticeably.”",
        img: avatar3,
        name: "Parth Bhawar",
      },
      {
        review:
          "“I loved the way he designed my portfolio site. The animations, layout, and colours were exactly what I imagined. He also guided me on how to update photos on my own. Overall, very talented and humble developer!”",
        img: avatar4,
        name: "Jaycy Naveen",
      },
         {
        review:
          "“I appreciate how quickly he understood my brand. The website he created is clean, user-friendly, and professional. What impressed me most was his attention to detail. I will definitely work with him again.”",
        img: avatar4,
        name: "Ashwini Jadhav",
      },
        {
        review:
          "“I appreciate how quickly he understood my brand. The website he created is clean, user-friendly, and professional. What impressed me most was his attention to detail. I will definitely work with him again.”",
        img: avatar4,
        name: "Renuka",
      },
       {
        review:
          "“My old website was slow and outdated. He redesigned everything, optimized the speed, and set up proper SEO. Now I’m getting more leads organically. Super professional work.”",
        img: avatar4,
        name: "Dr. Yogesh",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "From websites to mobile apps, I create digital products that look great and work even better. If you want reliable work, clear communication, and on-time delivery — I’m ready to build your next project.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ghorpadeudayraj2503@gmail.com",
        icon: GrMail,
        link: "mailto:ghorpadeudayraj2503@gmail.com",
      },
      {
        text: "Linkedin/ udayraj-ghorpade",
        icon: GrLinkedin,
        link: "https://www.linkedin.com/in/udayraj-ghorpade/",
      },
      {
        text: "Github/ udayraj001",
        icon: GrGithub,
        link: "https://github.com/udayraj001",
      },

      {
        text: "Twitter/ ud2503",
        icon: GrTwitter,
        link: "https://x.com/ud2503",
      },

      {
        text: "+91 8459686970",
        icon: MdCall,
        link: "",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
