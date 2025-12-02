
import { SkillCategory, Project, Certificate, NavItem, SocialLink } from './types';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const PERSONAL_INFO = {
  name: "Ram Krishna Jha",
  role: "Frontend Developer",
  location: "Samastipur, Bihar, India",
  education: "MCA student at Guru Ghasidas Central University, Bilaspur",
  summary: [
    "I’m Ram Krishna Jha, a Dedicated Front-End Developer experienced in building responsive, user-friendly web applications. Skilled in HTML, CSS, JavaScript, TypeScript, React, and Express.js, with database experience using MySQL, MongoDB, Firebase, and Supabase. Passionate about clean UI, performance-focused development, and using AI tools to accelerate workflow and productivity.",
  ],
  about: `My name is Ram Krishna Jha, and I’m from Samastipur, Bihar. I’m currently pursuing my MCA at Guru Ghasidas Central University in Bilaspur, where I’m focused on building strong foundations in computer science and web development. I enjoy creating modern web experiences with React, Tailwind and animations, while continuously improving my skills and learning new technologies. I’m especially interested in using AI tools to boost my productivity, speed up experimentation, and enhance the quality of the projects I build. I aim to grow as a frontend developer, collaborate with great teams, and build products that people genuinely enjoy using.`
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "React", "GSAP"]
  },
  {
    title: "Backend & APIs",
    skills: ["Express.js", "REST APIs"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase"]
  },
  {
    title: "Tools & Other",
    skills: ["Git", "GitHub", "AI Tools"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cineverse",
    title: "CineVerse",
    tagline: "A movie hub for film lovers.",
    description: "CineVerse is a web app built for movie lovers that brings together a large collection of movies and organizes them into different categories such as trending, popular, top-rated and more. Users can explore details about each movie and create their own favourites list or watchlist to keep track of what they want to see next. The experience is focused on a clean UI and easy discovery.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Express.js", "TMDB API", "Firebase", "SendGrid"],
    liveLink: "https://cineverse-966l.onrender.com/",
    githubLink: "https://github.com/ramkrishnajha5/CineVerse"
  },
  {
    id: "quizhub",
    title: "QuizHub",
    tagline: "Track your knowledge, question by question.",
    description: "QuizHub is an interactive quiz platform with multiple quiz sections covering different topics. Users can attempt quizzes, see which answers were right or wrong, and track their past quiz scores over time. There is also a study section that pulls in books for multiple subjects, helping users learn before they test themselves. The goal is to make learning and practice engaging and structured.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Firebase", "Google Books API"],
    liveLink: "https://quizzzhubb.netlify.app/",
    githubLink: "https://github.com/ramkrishnajha5/QuizHub"
  },
  {
    id: "gitapath",
    title: "GitaPath",
    tagline: "Digital wisdom of the Bhagavad Gita.",
    description: "GitaPath is a spiritual study and reading app that contains all 18 chapters and 700 verses of the Bhagavad Gita. Each verse is available in Sanskrit, Hindi, and English translation, making it accessible for different readers. Users can get a “Verse of the Day,” save their favourite verses, and share them with others. The goal is to provide a clean and peaceful reading experience with simple navigation.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "REST APIs"],
    liveLink: "https://thegitapath.netlify.app/",
    githubLink: "https://github.com/ramkrishnajha5/GitaPath"
  },
  {
    id: "weathergrid",
    title: "WeatherGrid",
    tagline: "Global weather forecasts at your fingertips.",
    description: "WeatherGrid is a weather application where users can search for any location and view detailed weather information. It shows current temperature, humidity, chance of rain, a 24-hour forecast, and a 3-day forecast. Users can save their favourite locations and also fetch the current location for instant weather updates. It uses multiple APIs to provide accurate and structured weather data in a clear UI.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Weatherbit API", "OpenCage API"],
    liveLink: "https://weathergridapp.netlify.app/",
    githubLink: "https://github.com/ramkrishnajha5/WeatherGrid"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "meta-js",
    name: "Programming with JavaScript – Meta",
    institution: "Meta",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/BDNSALGSJSLC"
  },
  {
    id: "jhu-html-css",
    name: "HTML, CSS and JavaScript for Web Developers",
    institution: "Johns Hopkins University",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/FN8U32Q2J8KY"
  },
  {
    id: "ucd-web-intro",
    name: "Introduction to Web Development",
    institution: "University of California, Davis",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/PS6DRTB8X6JQ"
  }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://instagram.com/ramkrishnajha5",
    icon: FaInstagram
  },
  {
    platform: "GitHub",
    url: "https://github.com/ramkrishnajha5",
    icon: FaGithub
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ramkrishnajha5",
    icon: FaLinkedin
  },
  {
    platform: "Email",
    url: "mailto:ram03krishna@gmail.com",
    icon: FaEnvelope
  }
];
