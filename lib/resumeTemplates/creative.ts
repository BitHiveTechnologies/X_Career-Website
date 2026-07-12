import { ResumeData } from '@/app/resume-builder/page';

export const CREATIVE_EXECUTIVE_TEMPLATE_IDS = [
    'creative-executive-1',
    'creative-executive-2',
    'creative-executive-3',
] as const;

export const CREATIVE_EXECUTIVE_TEMPLATE_ID = CREATIVE_EXECUTIVE_TEMPLATE_IDS[0];

export const isCreativeExecutiveTemplate = (templateId: string) =>
    templateId === 'creative' ||
    CREATIVE_EXECUTIVE_TEMPLATE_IDS.includes(
        templateId as (typeof CREATIVE_EXECUTIVE_TEMPLATE_IDS)[number],
    );

export const creativeExecutiveVisibleSections = [
    'personal',
    'experience',
    'education',
    'projects',
    'skills',
    'additional',
] as const;

export const creativeExecutiveOneLatexSource = String.raw`\documentclass[a4paper,10pt]{article}

\usepackage[left=0.7in,right=0.7in,top=0.6in,bottom=0.6in]{geometry}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage[hidelinks]{hyperref}

\pagestyle{empty}
\setlength{\parindent}{0pt}

% Section Style
\titleformat{\section}
{\large\bfseries}
{}
{0em}
{}[\titlerule]

\titlespacing{\section}{0pt}{10pt}{6pt}

\begin{document}

{\LARGE \textbf{Vinod Choudhary}} \\[3pt]

\textbf{SOFTWARE ENGINEER}

\vspace{4pt}

Hyderabad, India \; +91 9989017437 \;
\href{https://www.linkedin.com/in/vinod-choudhary}{linkedin.com/in/vinod-choudhary}

\vspace{12pt}

\section*{Professional Summary}

\begin{itemize}[leftmargin=1.2em,itemsep=3pt]
    \item Motivated Software Engineer with knowledge in Software Testing, Web Development, and Automation concepts.
    \item Experience in Functional Testing, Manual Testing, and understanding of Software Development Life Cycle (SDLC).
    \item Familiar with Agile methodology and defect tracking processes.
    \item Hands-on experience with frontend technologies including HTML, CSS, JavaScript, and Bootstrap.
    \item Knowledge of Python and Java programming with understanding of Database Management Systems.
    \item Good analytical and problem-solving skills with ability to work collaboratively in team environments.
    \item Experience in developing responsive web applications and project-based solutions.
    \item Strong understanding of debugging, testing scenarios, and application workflows.
    \item Quick learner with adaptability towards new tools and technologies.
\end{itemize}

\section*{Technical Skills}

\begin{itemize}[leftmargin=1.2em,itemsep=2pt]

    \item \textbf{Programming Languages}
    \begin{itemize}[leftmargin=1.5em]
        \item Java
        \item Python
    \end{itemize}

    \item \textbf{Frontend Technologies}
    \begin{itemize}[leftmargin=1.5em]
        \item HTML
        \item CSS
        \item JavaScript
        \item Bootstrap
    \end{itemize}

    \item \textbf{Database}
    \begin{itemize}[leftmargin=1.5em]
        \item MySQL
    \end{itemize}

    \item \textbf{Developer Tools}
    \begin{itemize}[leftmargin=1.5em]
        \item Git
        \item GitHub
        \item VS Code
        \item PyCharm
    \end{itemize}

\end{itemize}

\section*{Professional Experience}

\textbf{Software Engineer} \hfill 2024 -- Present

\textit{Company Name}

\textbf{Roles \& Responsibilities}

\begin{itemize}[leftmargin=1.5em,itemsep=3pt]
    \item Worked on enterprise-level web application development and testing activities.
    \item Participated in functional testing, regression testing, and defect tracking processes.
    \item Involved in preparing and executing test scenarios and validating application functionality.
    \item Collaborated with development and QA teams for issue resolution and testing activities.
    \item Worked on frontend enhancements and application improvements using web technologies.
    \item Maintained project reports and participated in Agile-based workflows.
    \item Contributed to debugging and testing of applications across multiple environments.
\end{itemize}

\vspace{8pt}

\textbf{Software Test Engineer Intern} \hfill 2023 -- 2024

\textit{Company Name}

\textbf{Roles \& Responsibilities}

\begin{itemize}[leftmargin=1.5em,itemsep=3pt]
    \item Assisted in software testing and validation activities for web-based applications.
    \item Performed manual testing and reported defects using bug tracking tools.
    \item Supported automation-related activities and script execution.
    \item Worked with teams to understand business requirements and testing objectives.
    \item Participated in regression and integration testing activities.
    \item Helped improve application quality through continuous testing and debugging support.
\end{itemize}

\section*{Education}

\textbf{Malla Reddy College of Engineering and Technology} \hfill 2020 -- 2024

Bachelor of Technology (B.Tech) \;|\; Information Technology

CGPA: 8.76

\section*{Certifications}

\begin{itemize}[leftmargin=1.5em,itemsep=2pt]
    \item Python Programming Certification
    \item Java Programming Certification
    \item Web Development Certification
    \item Database Management System (DBMS) Certification
\end{itemize}

\end{document}
`;

export const creativeExecutiveTwoLatexSource = String.raw`\documentclass[a4paper,10pt]{article}

\usepackage[left=0.7in,right=0.7in,top=0.6in,bottom=0.6in]{geometry}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage[hidelinks]{hyperref}
\usepackage{xcolor}

\definecolor{headingcolor}{RGB}{40,82,99}

\pagestyle{empty}
\setlength{\parindent}{0pt}
\setlength{\parskip}{2pt}

\titleformat{\section}
{\large\bfseries\color{headingcolor}}
{}
{0em}
{}
[\titlerule]

\titlespacing{\section}{0pt}{8pt}{6pt}

\begin{document}

{\LARGE \textbf{\color{headingcolor} VINOD CHOUDHARY}} \\[4pt]

\textbf{Phone:} 9989017437 \,
\textbf{Email:} \href{mailto:sindhuanemoni1@gmail.com}{xcareerconnect@gmail.com} \,
Hyderabad, Telangana, India \\

LinkedIn: \href{https://linkedin.com/in/anemoni-sindhu-priya-99aa64225}{linkedin.com/in/vinodchoudhary}

\vspace{6pt}

\section*{PROFESSIONAL SUMMARY}

Salesforce Developer with 2+ years of hands-on experience building and deploying scalable CRM solutions using Apex, Lightning Web Components (LWC), and Flow automation.

Proven ability to deliver bulkified, governor-limit-compliant code, automate complex business processes, and configure robust security models across Sales Cloud, Service Cloud, Experience Cloud, and Manufacturing Cloud.

Salesforce Certified Administrator credential, with a strong foundation in Agile delivery, SFDX-based deployments, and production support.

\section*{TECHNICAL SKILLS}

\begin{itemize}[leftmargin=1.2em,itemsep=3pt]

\item \textbf{Salesforce Development:} Apex Classes, Apex Triggers, Bulkification, Governor Limits, Apex Test Classes, SOQL
\item \textbf{Frontend:} Lightning Web Components (LWC), JavaScript, HTML, CSS
\item \textbf{Automation \& Configuration:} Record-Triggered Flows, Screen Flows, Validation Rules, Formula Fields, Email Alerts
\item \textbf{Salesforce Administration:} Profiles, Permission Sets, Public Groups, Roles \& Hierarchy, Sharing Rules, User Management, Page Layouts, Record Types
\item \textbf{Clouds:} Sales Cloud, Service Cloud, Experience Cloud, Manufacturing Cloud
\item \textbf{Integrations:} REST APIs, Apex Callouts, OpenStreetMap API
\item \textbf{Tools \& DevOps:} Salesforce CLI (SFDX), Git, VS Code, Change Sets, Salesforce Inspector
\item \textbf{Methodologies:} Agile, Scrum, UAT Support, Requirement Gathering

\end{itemize}

\section*{PROFESSIONAL EXPERIENCE}

\textbf{Role -- Company Name, Location} \\
\textit{Feb 2023 -- Present}

\vspace{4pt}

\textbf{Project: Project Name}

\begin{itemize}[leftmargin=1.2em,itemsep=3pt]
\item Administered \textbf{profiles, permission sets, public groups, and role hierarchy}, establishing a robust user access and security framework aligned with the principle of least privilege.
\item Engineered reusable \textbf{Lightning Web Components (LWC)} with Apex controller integration, enabling scalable and maintainable UI solutions across the platform.
\item Designed and deployed \textbf{record-triggered and screen flows} alongside \textbf{automated email alerts}, streamlining 8+ business processes and substantially reducing manual intervention.
\item Implemented \textbf{sharing rules and record-level security} configurations to enforce precise data visibility controls across user groups and territories.
\item Executed comprehensive \textbf{platform configurations} --- including page layouts, record types, and validation rules --- translating stakeholder requirements into precise CRM functionality.
\item Optimized \textbf{SOQL and SOSL queries} to enhance data retrieval efficiency, reduce query execution time, and maintain platform performance at scale.
\item Authored comprehensive \textbf{Apex test classes} with robust validation scenarios, consistently achieving 85\%+ code coverage across all production deployments.
\item Contributed actively to \textbf{Agile ceremonies} including sprint planning, daily stand-ups, and UAT support, ensuring on-time delivery aligned with business objectives.
\item Managed end-to-end deployments via \textbf{Change Sets and Salesforce CLI (SFDX)}, maintaining release quality and minimizing post-deployment issues.
\item Delivered \textbf{production support} by diagnosing and resolving critical system issues promptly, improving overall platform stability and user experience.
\end{itemize}

\vspace{4pt}

\textbf{Internal Accelerator Project (Evoke Technologies) -- Household Location Tracking}

\begin{itemize}[leftmargin=1.2em,itemsep=3pt]
\item Conceived and built a \textbf{custom Lightning Web Component (LWC)} enabling map-based household location tracking directly within Salesforce.
\item Integrated \textbf{OpenStreetMap APIs} to deliver accurate geocoding and reverse geocoding capabilities, translating addresses into map coordinates and vice versa.
\item Developed \textbf{Apex callouts} to facilitate seamless REST-based integration between Salesforce and external mapping services.
\item Empowered end users to \textbf{pin, visualise, and manage household locations} interactively within Salesforce, improving field team efficiency and data accuracy.
\end{itemize}

\section*{CERTIFICATION}

\begin{itemize}[leftmargin=1.2em,itemsep=2pt]
\item \textbf{Salesforce Certified Administrator}
\end{itemize}

\section*{EDUCATION}

\textbf{B. Tech in Computer Science and Engineering} \\
MLR Institute of Technology \hfill 2019 -- 2023 \\
CGPA: 7.60

\vspace{6pt}

\textbf{Intermediate (Higher Secondary Education)} \\
Sri Chaitanya Junior College \\
Score: 92.5\%

\end{document}
`;

export const creativeExecutiveThreeLatexSource = String.raw`\documentclass[11pt,a4paper]{article}

\usepackage[a4paper,margin=0.7in]{geometry}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{titlesec}
\usepackage{parskip}

\pagestyle{empty}

\titleformat{\section}
{\large\bfseries}
{}
{0em}
{}[\titlerule]

\setlist[itemize]{
leftmargin=1.2em,
itemsep=2pt,
topsep=2pt
}

\begin{document}

\begin{center}
{\LARGE \textbf{Vinod Choudhary}}\\[5pt]

vinodchoudharyit@gmail.com \quad
9989017437 \quad
Hyderabad, Telangana \quad
LinkedIn: linkedin.com/in/vinod-choudhary

\end{center}

\section*{PROFILE}

Computer Science Engineering graduate (2025) with specialization in Cybersecurity from KL University, Hyderabad and training in Data Analytics. Skilled in Python, SQL, software testing, data analysis, and visualization. Strong understanding of Manual Testing, SDLC, STLC, defect tracking, and quality assurance methodologies. Seeking opportunities in Data Analyst, QA Engineer, or Software Testing roles where analytical and technical skills can contribute to business growth and product quality.

\section*{EDUCATION}

\textbf{KLH University} \hfill Hyderabad, India

Bachelor of Technology (Computer Science Engineering) \hfill 2021 -- 2025

CGPA: 8.63

\vspace{4pt}

\textbf{Narayana Junior College} \hfill Hyderabad, India

Intermediate (MPC) \hfill 2019 -- 2021

Percentage: 70\%

\vspace{4pt}

\textbf{Narayana High School} \hfill Hyderabad, India

SSC \hfill 2018 -- 2019

CGPA: 9.0

\section*{SKILLS}

\textbf{Programming Languages:}
Python, C

\vspace{3pt}

\textbf{Database:}
SQL

\vspace{3pt}

\textbf{Testing Skills:}
\begin{itemize}
\item Manual Testing
\item Functional Testing
\item Regression Testing
\item System Testing
\item Integration Testing
\item Stability Testing
\item Performance Testing
\item Test Case Design and Execution
\item Defect Life Cycle
\item Bug Tracking
\item SDLC and STLC
\item Agile and Scrum Methodologies
\end{itemize}

\textbf{Tools and Platforms:}
Excel, Tableau, Power BI

\vspace{3pt}

\textbf{Soft Skills:}
Time Management, Communication, Problem Solving, Team Collaboration

\section*{PROJECTS}

\textbf{University Voting System}

\begin{itemize}
\item Developed an online university voting system using Java Spring Boot, ReactJS, and MySQL.
\item Implemented secure voting workflows for universities and colleges.
\item Integrated backend APIs with frontend components for seamless user experience.
\item Utilized Apache Tomcat Server, Eclipse IDE, and Spring Boot architecture.
\end{itemize}

\vspace{5pt}

\textbf{Cross Selling Marketing Strategy (Insurance Domain)}

\begin{itemize}
\item Analyzed insurance customer and policy datasets to identify frequently co-purchased products.
\item Performed Exploratory Data Analysis (EDA) and relationship analysis to uncover business insights.
\item Created visualizations using Matplotlib and Seaborn.
\item Identified high-value product bundles and customer purchasing trends to support cross-selling campaigns.
\end{itemize}

\section*{COURSE}

\textbf{Data Analytics \& Business Analytics}

Naresh i Technologies, Hyderabad

Duration: September 2025 -- January 2026

\begin{itemize}
\item Python for Data Analysis
\item SQL for Data Analysis
\item Pandas and NumPy
\item Data Visualization using Matplotlib
\item Dashboard Creation using Power BI and Tableau
\item Advanced Microsoft Excel for Data Analysis
\end{itemize}

\section*{CERTIFICATIONS}

\begin{itemize}
\item Oracle Cloud Infrastructure 2023 Certified Architect Associate
\item Microsoft Certified: Azure Fundamentals (AZ-900)
\item AWS Cloud Practitioner
\end{itemize}

\end{document}
`;

const creativeExecutiveDefaults: ResumeData = {
    personalInfo: {
        fullName: 'Vinod Choudhary',
        email: '',
        phone: '+91 9989017437',
        location: 'Hyderabad, India',
        linkedin: 'https://www.linkedin.com/in/vinod-choudhary',
        github: '',
        portfolio: '',
        summary:
            'Motivated Software Engineer with knowledge in Software Testing, Web Development, and Automation concepts.\nExperience in Functional Testing, Manual Testing, and understanding of Software Development Life Cycle (SDLC).\nFamiliar with Agile methodology and defect tracking processes.\nHands-on experience with frontend technologies including HTML, CSS, JavaScript, and Bootstrap.\nKnowledge of Python and Java programming with understanding of Database Management Systems.\nGood analytical and problem-solving skills with ability to work collaboratively in team environments.\nExperience in developing responsive web applications and project-based solutions.\nStrong understanding of debugging, testing scenarios, and application workflows.\nQuick learner with adaptability towards new tools and technologies.',
    },
    experience: [
        {
            id: 'creative-executive-exp-1',
            company: 'Company Name',
            position: 'Software Engineer',
            location: '',
            startDate: '2024',
            endDate: '',
            current: true,
            description: [
                'Worked on enterprise-level web application development and testing activities.',
                'Participated in functional testing, regression testing, and defect tracking processes.',
                'Involved in preparing and executing test scenarios and validating application functionality.',
                'Collaborated with development and QA teams for issue resolution and testing activities.',
                'Worked on frontend enhancements and application improvements using web technologies.',
                'Maintained project reports and participated in Agile-based workflows.',
                'Contributed to debugging and testing of applications across multiple environments.',
            ],
        },
        {
            id: 'creative-executive-exp-2',
            company: 'Company Name',
            position: 'Software Test Engineer Intern',
            location: '',
            startDate: '2023',
            endDate: '2024',
            current: false,
            description: [
                'Assisted in software testing and validation activities for web-based applications.',
                'Performed manual testing and reported defects using bug tracking tools.',
                'Supported automation-related activities and script execution.',
                'Worked with teams to understand business requirements and testing objectives.',
                'Participated in regression and integration testing activities.',
                'Helped improve application quality through continuous testing and debugging support.',
            ],
        },
    ],
    education: [
        {
            id: 'creative-executive-edu-1',
            institution: 'Malla Reddy College of Engineering and Technology',
            degree: 'Bachelor of Technology (B.Tech)',
            field: 'Information Technology',
            location: '',
            startDate: '2020',
            endDate: '2024',
            gpa: '8.76',
            achievements: [],
        },
    ],
    projects: [],
    skills: [
        { category: 'Programming Languages', items: ['Java', 'Python'] },
        { category: 'Frontend Technologies', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
        { category: 'Database', items: ['MySQL'] },
        { category: 'Developer Tools', items: ['Git', 'GitHub', 'VS Code', 'PyCharm'] },
    ],
    certifications: [
        'Python Programming Certification',
        'Java Programming Certification',
        'Web Development Certification',
        'Database Management System (DBMS) Certification',
    ],
    languages: [],
};

export const cloneCreativeExecutiveDefaults = (): ResumeData =>
    JSON.parse(JSON.stringify(creativeExecutiveDefaults));
