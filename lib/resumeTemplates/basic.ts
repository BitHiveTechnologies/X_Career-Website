import { ResumeData } from '@/app/resume-builder/page';

export const BASIC_TEMPLATE_ID = 'vinod';

export const basicTemplateVisibleSections = [
    'personal',
    'experience',
    'education',
    'projects',
    'skills',
] as const;

export const basicTemplateLatexSource = String.raw`%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

\pdfgentounicode=1

\begin{document}
\begin{center}
    \textbf{\Huge \scshape Jake Ryan} \\ \vspace{1pt}
    \small 123-456-7890 $|$ \href{mailto:x@x.com}{\underline{jake@su.edu}} $|$
    \href{https://linkedin.com/in/...}{\underline{linkedin.com/in/jake}} $|$
    \href{https://github.com/...}{\underline{github.com/jake}}
\end{center}
\section{Education}
\section{Experience}
\section{Projects}
\section{Technical Skills}
\end{document}
`;

const basicTemplateDefaults: ResumeData = {
    personalInfo: {
        fullName: 'Jake Ryan',
        email: 'jake@su.edu',
        phone: '123-456-7890',
        location: '',
        linkedin: 'https://linkedin.com/in/jake',
        github: 'https://github.com/jake',
        portfolio: '',
        summary: '',
    },
    experience: [
        {
            id: 'basic-exp-1',
            company: 'Texas A&M University',
            position: 'Undergraduate Research Assistant',
            location: 'College Station, TX',
            startDate: '2020-06',
            endDate: '',
            current: true,
            description: [
                'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
                'Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data',
                'Explored ways to visualize GitHub collaboration in a classroom setting',
            ],
        },
        {
            id: 'basic-exp-2',
            company: 'Southwestern University',
            position: 'Information Technology Support Specialist',
            location: 'Georgetown, TX',
            startDate: '2018-09',
            endDate: '',
            current: true,
            description: [
                'Communicate with managers to set up campus computers used on campus',
                'Assess and troubleshoot computer problems brought by students, faculty and staff',
                'Maintain upkeep of computers, classroom equipment, and 200 printers across campus',
            ],
        },
        {
            id: 'basic-exp-3',
            company: 'Southwestern University',
            position: 'Artificial Intelligence Research Assistant',
            location: 'Georgetown, TX',
            startDate: '2019-05',
            endDate: '2019-07',
            current: false,
            description: [
                'Explored methods to generate video game dungeons based off of The Legend of Zelda',
                'Developed a game in Java to test the generated dungeons',
                'Contributed 50K+ lines of code to an established codebase via Git',
                'Conducted a human subject study to determine which video game dungeon generation technique is enjoyable',
                'Wrote an 8-page paper and gave multiple presentations on-campus',
                'Presented virtually to the World Conference on Computational Intelligence',
            ],
        },
    ],
    education: [
        {
            id: 'basic-edu-1',
            institution: 'Southwestern University',
            degree: 'Bachelor of Arts',
            field: 'Computer Science, Minor in Business',
            location: 'Georgetown, TX',
            startDate: '2018-08',
            endDate: '2021-05',
            achievements: [],
        },
        {
            id: 'basic-edu-2',
            institution: 'Blinn College',
            degree: "Associate's",
            field: 'Liberal Arts',
            location: 'Bryan, TX',
            startDate: '2014-08',
            endDate: '2018-05',
            achievements: [],
        },
    ],
    projects: [
        {
            id: 'basic-project-1',
            name: 'Gitlytics',
            description: 'Developed a full-stack web application using Flask serving a REST API with React as the frontend',
            technologies: ['Python', 'Flask', 'React', 'PostgreSQL', 'Docker'],
            startDate: '2020-06',
            endDate: '',
            current: true,
            highlights: [
                'Developed a full-stack web application using Flask serving a REST API with React as the frontend',
                'Implemented GitHub OAuth to get data from user repositories',
                'Visualized GitHub data to show collaboration',
                'Used Celery and Redis for asynchronous tasks',
            ],
        },
        {
            id: 'basic-project-2',
            name: 'Simple Paintball',
            description: 'Developed a Minecraft server plugin to entertain kids during free time for a previous job',
            technologies: ['Spigot API', 'Java', 'Maven', 'TravisCI', 'Git'],
            startDate: '2018-05',
            endDate: '2020-05',
            current: false,
            highlights: [
                'Developed a Minecraft server plugin to entertain kids during free time for a previous job',
                'Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review',
                'Implemented continuous delivery using TravisCI to build the plugin upon each release',
                'Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin',
            ],
        },
    ],
    skills: [
        { category: 'Languages', items: ['Java', 'Python', 'C/C++', 'SQL (Postgres)', 'JavaScript', 'HTML/CSS', 'R'] },
        { category: 'Frameworks', items: ['React', 'Node.js', 'Flask', 'JUnit', 'WordPress', 'Material-UI', 'FastAPI'] },
        { category: 'Developer Tools', items: ['Git', 'Docker', 'TravisCI', 'Google Cloud Platform', 'VS Code', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Eclipse'] },
        { category: 'Libraries', items: ['pandas', 'NumPy', 'Matplotlib'] },
    ],
    certifications: [],
    languages: [],
};

export const cloneBasicTemplateDefaults = (): ResumeData =>
    JSON.parse(JSON.stringify(basicTemplateDefaults));
