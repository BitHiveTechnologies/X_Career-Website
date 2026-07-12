import { ResumeData } from '@/app/resume-builder/page';

export const STANDARD_PROFESSIONAL_TEMPLATE_IDS = [
    'standard-professional-1',
    'standard-professional-2',
] as const;

export const STANDARD_PROFESSIONAL_TEMPLATE_ID = STANDARD_PROFESSIONAL_TEMPLATE_IDS[0];

export const isStandardProfessionalTemplate = (templateId: string) =>
    templateId === 'professional' ||
    STANDARD_PROFESSIONAL_TEMPLATE_IDS.includes(
        templateId as (typeof STANDARD_PROFESSIONAL_TEMPLATE_IDS)[number],
    );

export const standardProfessionalVisibleSections = [
    'personal',
    'experience',
    'education',
    'projects',
    'skills',
    'additional',
] as const;

export const standardProfessionalOneLatexSource = String.raw`\documentclass[a4paper,10pt]{article}

\usepackage[left=0.7in,right=0.7in,top=0.6in,bottom=0.6in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{array}

\pagestyle{empty}
\setlength{\parindent}{0pt}

% Section formatting
\titleformat{\section}
{\large\scshape}
{}{0em}{}[\titlerule]

\begin{document}

\begin{center}
    {\LARGE Vinod Choudhary}\\[4pt]
    Github : Github Link \hspace{0.4cm}
    LinkedIn : LinkedIn Link \hspace{0.4cm}
    Gmail : xcareerconnect@gmail.com\\
    Mobile: +91 9989017437
\end{center}

\vspace{0.2cm}

\section*{Career Objective}

Motivated fresher with strong skills in programming, machine learning, and web development. Looking to contribute to innovative projects and grow professionally.

\vspace{0.2cm}

\section*{Experience}

\textbf{Company:} Company Name.\\
\textbf{Role:} Role.\\
\textbf{Experience:} Role.\\
Working as Intern on the technology called Flutter developed an app using flutter (Zion Songs -- Which is available in playstore).

\vspace{0.2cm}

\section*{Technical Skills}

\textbf{Programming:} C, Python, Core Java, Flutter\\
\textbf{Web Technologies:} HTML5, CSS3, JavaScript, React.js\\
\textbf{Databases:} SQL\\
\textbf{Version Control:} GitHub

\vspace{0.2cm}

\section*{Projects}

\textbf{Predicting Bitcoin Prices Using Machine Learning}\\
\textbf{Github Repo:} Predicting-the-price-of-bitcoin\\
\textbf{Description:} Web application developed and tested on localhost\\
\textbf{Credentials:} \textit{Username: Admin, Password: Admin}\\
Built a predictive model using Random Forest and Gradient Boosting on historical crypto data. Researched 10+ academic papers to enhance model reliability.

\vspace{0.25cm}

\textbf{Blockchain Based Organ Donation and Transplantation}\\
\textbf{Github Repo:} Blockchain based organ donation and transplantation\\
\textbf{Description:} Web application developed and tested on localhost\\
Designed a secure organ donation management system using blockchain principles to improve transparency and trust.\\
Tested and analyzed the solution for privacy, security, and performance, ensuring reliable data handling.

\vspace{0.2cm}

\section*{Education}

\begin{tabular}{p{2cm} p{10cm} p{3cm}}
2021 -- 2025 &
Bachelor of Technology in Computer Science at \textbf{Mallareddy Institute Of Technology and Science}
& (GPA: 8.4/10) \\

2019 -- 2021 &
Intermediate at \textbf{Sree Sandeepani Junior College}
& (GPA: 9.6/10) \\

2019 &
Class 10th at \textbf{Zilla Parishad High School}
& (GPA: 9.8/10) \\
\end{tabular}

\vspace{0.2cm}

\section*{Certifications}

\textbf{Python Programming} -- CISCO\\
\textbf{JavaScript, React.js Bootcamp} -- DevTown\\
\textbf{Data Science, ML Internship} -- Ybi Foundation

\end{document}
`;

export const standardProfessionalTwoLatexSource = String.raw`\documentclass[10pt,a4paper]{article}

\usepackage[a4paper,margin=0.6in]{geometry}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage{hyperref}
\usepackage{fontawesome5}
\usepackage{array}
\usepackage{xcolor}
\usepackage{parskip}

\hypersetup{
    colorlinks=true,
    urlcolor=blue
}

\pagestyle{empty}

\titleformat{\section}
{\Large\bfseries}
{}
{0em}
{}
[\titlerule]

\setlist[itemize]{leftmargin=1.2em,itemsep=1pt,topsep=2pt}

\begin{document}

\begin{center}
    {\Huge \textbf{Vinod Choudhary}}\\[8pt]

    \faMapMarker* \ Hyderabad \hspace{12pt}
    \faEnvelope \ vinodchoudharyit@gmail.com \hspace{12pt}
    \faPhone \ 9989017437 \hspace{12pt}
    \faLinkedin \ \href{https://linkedin.com/in/vinodchoudhary}{nunsavathakash}
    \hspace{12pt}
\end{center}

\section*{Technical Skills}

\textbf{Languages:} Java, Python, C, SQL, JavaScript\\
\textbf{Frameworks:} Django, FastAPI\\
\textbf{Libraries:} Pydantic, React\\
\textbf{Database:} PostgreSQL, MySQL, DBMS\\
\textbf{Core Concepts:} Data Structures \& Algorithms, OOP, Design Patterns, Multithreading, SDLC, Test-Driven Development (TDD), Operating Systems\\
\textbf{Tools:} Git, Tailwind CSS, Visual Studio Code

\section*{Achievements}

\begin{itemize}
    \item Solved \textbf{600+ problems} on LeetCode and other competitive coding platforms, demonstrating strong algorithmic thinking, debugging, and problem-solving under constraints.
\end{itemize}

\section*{Experience}

\noindent
\textbf{Software Engineer Intern -- MiniOrange Security Software Pvt Ltd}
\hfill
\textbf{Nov 2024 -- Dec 2024}

\begin{itemize}
    \item Contributed to SSO plugin integrations for Jira and Confluence within an Agile SDLC environment, participating in sprint planning, code reviews, and iterative testing cycles.
    \item Performed systematic debugging and troubleshooting of authentication workflows, identifying and documenting failure points in SSO configurations across multiple identity providers.
    \item Assisted in writing and executing test cases for authentication flows, gaining exposure to structured software testing practices aligned with TDD principles.
\end{itemize}

\vspace{0.05cm}

\noindent
\textbf{Event Management Lead -- Entrepreneurship Cell (E-Cell)}
\hfill
\textbf{2025 -- Present}

\begin{itemize}
    \item Led cross-functional coordination of workshops and competitions for 200+ students, demonstrating teamwork and communication skills suited for global team environments.
    \item Managed end-to-end planning and execution cycles, applying structured project management principles to deliver events on time and within scope.
\end{itemize}

\section*{Projects}

\noindent
\textbf{Onitsuka -- Scalable E-commerce Platform}
\hfill
\href{https://github.com/}{GitHub Link}

\begin{itemize}
    \item Designed and developed a scalable, modular e-commerce platform using Django and Tailwind CSS, applying OOP principles and MVC design patterns for maintainability and extensibility.
    \item Implemented secure user authentication and role-based authorization, ensuring robust access control across cart, checkout, and order management modules.
    \item Built reusable, testable components for product listing, category filtering, and shopping cart, following clean code practices and Django's built-in testing framework for reliability.
\end{itemize}

\vspace{0.05cm}

\noindent
\textbf{LinkRoom -- Real-time Chat Application}
\hfill
\href{https://github.com/}{GitHub Link}

\begin{itemize}
    \item Developed a stable, real-time chat application using Django Channels and WebSockets, handling concurrent connections and asynchronous message delivery -- skills directly applicable to supporting high-throughput systems.
    \item Engineered secure room access with password protection, join-request flows, and role-based permissions, demonstrating proficiency in OOP design patterns and access-control logic.
    \item Built with persistent message storage via Django ORM and a responsive Tailwind CSS UI; applied manual integration testing throughout the SDLC to ensure system stability.
\end{itemize}

\section*{Education}

\noindent
\textbf{Gokaraju Rangaraju Institute of Engineering and Technology}
\hfill
\textbf{2022 -- 2026}

B.Tech in Computer Science \hfill GPA: 7.4/10.0

\end{document}
`;

const standardProfessionalDefaults: ResumeData = {
    personalInfo: {
        fullName: 'Vinod Choudhary',
        email: 'xcareerconnect@gmail.com',
        phone: '+91 9989017437',
        location: '',
        linkedin: 'https://linkedin.com/in/vinod',
        github: 'https://github.com/vinod',
        portfolio: '',
        summary:
            'Motivated fresher with strong skills in programming, machine learning, and web development. Looking to contribute to innovative projects and grow professionally.',
    },
    experience: [
        {
            id: 'standard-professional-exp-1',
            company: 'Company Name',
            position: 'Role',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: [
                'Working as Intern on the technology called Flutter developed an app using flutter (Zion Songs - Which is available in playstore).',
            ],
        },
    ],
    education: [
        {
            id: 'standard-professional-edu-1',
            institution: 'Mallareddy Institute Of Technology and Science',
            degree: 'Bachelor of Technology',
            field: 'Computer Science',
            location: '',
            startDate: '2021',
            endDate: '2025',
            gpa: '8.4/10',
            achievements: [],
        },
        {
            id: 'standard-professional-edu-2',
            institution: 'Sree Sandeepani Junior College',
            degree: 'Intermediate',
            field: '',
            location: '',
            startDate: '2019',
            endDate: '2021',
            gpa: '9.6/10',
            achievements: [],
        },
        {
            id: 'standard-professional-edu-3',
            institution: 'Zilla Parishad High School',
            degree: 'Class 10th',
            field: '',
            location: '',
            startDate: '2019',
            endDate: '',
            gpa: '9.8/10',
            achievements: [],
        },
    ],
    projects: [
        {
            id: 'standard-professional-project-1',
            name: 'Predicting Bitcoin Prices Using Machine Learning',
            description: 'Web application developed and tested on localhost',
            technologies: ['Random Forest', 'Gradient Boosting'],
            startDate: '',
            endDate: '',
            current: false,
            github: 'Predicting-the-price-of-bitcoin',
            highlights: [
                'Built a predictive model using Random Forest and Gradient Boosting on historical crypto data.',
                'Researched 10+ academic papers to enhance model reliability.',
            ],
        },
        {
            id: 'standard-professional-project-2',
            name: 'Blockchain Based Organ Donation and Transplantation',
            description: 'Web application developed and tested on localhost',
            technologies: ['Blockchain'],
            startDate: '',
            endDate: '',
            current: false,
            github: 'Blockchain based organ donation and transplantation',
            highlights: [
                'Designed a secure organ donation management system using blockchain principles to improve transparency and trust.',
                'Tested and analyzed the solution for privacy, security, and performance, ensuring reliable data handling.',
            ],
        },
    ],
    skills: [
        { category: 'Programming', items: ['C', 'Python', 'Core Java', 'Flutter'] },
        { category: 'Web Technologies', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
        { category: 'Databases', items: ['SQL'] },
        { category: 'Version Control', items: ['GitHub'] },
    ],
    certifications: [
        'Python Programming -- CISCO',
        'JavaScript, React.js Bootcamp -- DevTown',
        'Data Science, ML Internship -- Ybi Foundation',
    ],
    languages: [],
};

export const cloneStandardProfessionalDefaults = (): ResumeData =>
    JSON.parse(JSON.stringify(standardProfessionalDefaults));
