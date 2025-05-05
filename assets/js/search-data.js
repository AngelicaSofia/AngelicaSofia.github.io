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
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
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
        
        description: "The Salone dei Pagamenti is Italy’s leading national event on payments and innovation, promoted by ABI and organized by ABIServizi.",
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
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ai-driving-car",
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
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
