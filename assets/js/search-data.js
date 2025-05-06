// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A showcase of innovative initiatives at the intersection of technology, education, sustainability, and civic engagement, driving impact through collaboration and creative solutions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "A selection of academic projects and publications developed in collaboration with university research groups.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-bookshelf",
              title: "Bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-courses",
              title: "Courses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/courses/";
              },
            },{id: "post-payvolution-2024",
        
          title: "PayVolution 2024",
        
        description: "The Salone dei Pagamenti is Italy’s leading national event on payments and innovation, promoted by ABI and organized by ABIServizi.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/PayVolution/";
          
        },
      },{id: "post-polimiride-cremona-2024",
        
          title: "PolimiRide Cremona 2024",
        
        description: "A vibrant cycling celebration open to everyone, promoting sustainability, well-being, and community through the streets of Cremona.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/PolimiRide-2024/";
          
        },
      },{id: "post-motogp-mugello-2024",
        
          title: "MotoGP Mugello 2024",
        
        description: "A breathtaking race weekend at Mugello crowned by Pecco&#39;s double victory — experienced from the unforgettable vantage point of Terrazza Gold.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/MotoGP/";
          
        },
      },{id: "post-polimirun-spring-2024",
        
          title: "PolimiRun Spring 2024",
        
        description: "2024 edition of PolimiRun Spring, the 10 km urban trail run organized by the Politecnico di Milano, connecting its two Milan campuses and open to all participants.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/PolimiRun-2024/";
          
        },
      },{id: "post-papal-audience-with-the-italian-red-cross",
        
          title: "Papal Audience with the Italian Red Cross",
        
        description: "Papal audience at the Vatican celebrating the 160th anniversary of the Italian Red Cross.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Red-Cross/";
          
        },
      },{id: "post-payvolution-2023",
        
          title: "PayVolution 2023",
        
        description: "The Salone dei Pagamenti is Italy’s leading national event on payments and innovation, promoted by ABI and organized by ABIServizi.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/PayVolution/";
          
        },
      },{id: "post-polimirun-spring-2023",
        
          title: "PolimiRun Spring 2023",
        
        description: "2024 edition of PolimiRun, the 10 km urban trail run organized by the Politecnico di Milano, connecting its two Milan campuses and open to all participants.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/PolimiRun-2023/";
          
        },
      },{id: "post-polimirun-winter-2022",
        
          title: "PolimiRun Winter 2022",
        
        description: "2022 edition of PolimiRun Winter, tge 10 km competitive and non-competitive trail race through the city and hills of Lecco.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/PolimiRun-2022/";
          
        },
      },{id: "post-graduation-day-2022",
        
          title: "Graduation Day 2022",
        
        description: "Honored to be among 20 Alumni awarded by Rector Resta at Politecnico di Milano’s Graduation Day 2022, a ceremony to celebrate all students who completed their degrees during the Covid-19 emergency period.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/graduationday/";
          
        },
      },{id: "post-graduation-master-degree",
        
          title: "Graduation Master Degree",
        
        description: "Proudly earned my Master’s degree in Computer Science Engineering from Politecnico di Milano with honors, completing a thesis on reinforcement learning for autonomous driving. This milestone marks the start of a journey to apply my skills and determination to bring real value to the tech industry.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/graduation/";
          
        },
      },{id: "books-the-legend-of-anita",
          title: 'The Legend of Anita',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2025-03-12-LeggendaAnita/";
            },},{id: "courses-ccna-r-amp-s-introduction-to-networks",
          title: 'CCNA R&amp;amp;S. Introduction to Networks',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2018-04-07-CCNAR&SIntroductiontoNetworks/";
            },},{id: "courses-ccna-r-amp-s-routing-and-switching-essentials",
          title: 'CCNA R&amp;amp;S. Routing and Switching Essentials',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2018-07-22-CCNAR&SRoutingSwitchingEssentials/";
            },},{id: "courses-basic-recommender-systems",
          title: 'Basic Recommender Systems',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2020-10-26-BasicRecommenderSystems/";
            },},{id: "courses-advanced-recommender-systems",
          title: 'Advanced Recommender Systems',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2020-12-10-AdvancedRecommendedSystems/";
            },},{id: "courses-introduction-to-iot",
          title: 'Introduction to IoT',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2022-07-29-IntroductionToIoT/";
            },},{id: "courses-red-cross-volunteer-qualification",
          title: 'Red Cross Volunteer Qualification',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2022-09-21-RedCrossVolunteer/";
            },},{id: "courses-medical-transport-operator-amp-aed-certification",
          title: 'Medical Transport Operator &amp;amp; AED Certification',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2023-05-10-RedCrossDAE/";
            },},{id: "courses-project-management-fundamentals",
          title: 'Project Management Fundamentals',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2024-06-04-ProjectManagementFundamentals/";
            },},{id: "courses-polimi-gsom-pmp-exam-preparation-course",
          title: 'POLIMI GSOM PMP® EXAM PREPARATION COURSE',
          description: "",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2024-10-18-PMP/";
            },},{id: "projects-ai-driving-car",
          title: 'AI Driving Car',
          description: "An AI-powered coaching framework for learner drivers in automotive industry, combining Reinforcement Learning and advanced planning algorithms to guide, correct, and accelerate skill acquisition, with the goal of optimizing high-performance driving on racetracks (Monza circuit FormulaUno as Use Case).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_project/";
            },},{id: "projects-crowd4sdg",
          title: 'Crowd4SDG',
          description: "Crowd4SDG is a Horizon 2020 Research and Innovation Action supported by the European Commission’s Science with and for Society (SwafS) programme and sponsored by CERN IdeaSquare with the partnership of key players in AI, Sustainability and Engineering.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_project/";
            },},{id: "projects-kge-perf",
          title: 'KGE-Perf',
          description: "This project investigates how different KGE algorithms behave in terms of memory and speed across diverse hardware setups. The goal is to bridge the gap between research and real-world applicability, offering insights for scalable, efficient deployments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/19_project/";
            },},{id: "projects-erasmus-2014-16",
          title: 'ERASMUS+ 2014-16',
          description: "Erasmus+ Y.E.S. – Youth Empowering Skills for the 21st Century is a European educational project that promotes youth entrepreneurship, self-empowerment, and active citizenship through international collaboration and practical training.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%67%65%6C%69%63%61%73%6F%66%69%61.%76%61%6C%65%72%69%61%6E%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/Angi_Sofi_Vale", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/angelica-sofia-valeriani", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AngelicaSofia", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=I1nKI9YAAAAJ", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/angi.sofi.vale", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
