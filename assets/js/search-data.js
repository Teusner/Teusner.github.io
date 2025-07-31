// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-thesis",
          title: "thesis",
          description: "This page is dedicated to my PhD thesis about stable cycles for mobile robots navigation",
          section: "Navigation",
          handler: () => {
            window.location.href = "/thesis/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Find here my research papers, conference contributions, and journal articles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Find here my research papers, conference contributions, and journal articles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Explore my key projects, where research meets innovation. This curated selection highlights my most impactful work, showcasing the intersection of ideas, technology, and creative problem-solving. Each project reflects my commitment to advancing knowledge and pushing the boundaries of robotics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "This page lists the courses I am currently teaching at ENSTA.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-transcode-videos-for-davinci-resolve",
        
          title: "transcode videos for Davinci Resolve",
        
        description: "a command to transcode videos for Davinci Resolve",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/davinci_transcoding/";
          
        },
      },{id: "post-some-explanations-about-my-logo",
        
          title: "some explanations about my logo",
        
        description: "presentation of my logo",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/my-logo/";
          
        },
      },{id: "projects-stable-cycles-icra2025",
          title: 'Stable Cycles ICRA2025',
          description: "ICRA2025 contribution about stable cycles in robotics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/icra2025/";
            },},{id: "teaching-subsurface-introduction-to-auvs",
          title: 'Subsurface - Introduction to AUVs',
          description: "Courses about the fabrication of a Low Cost Subsurface AUV",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/subsurface/module_0/";
            },},{id: "teaching-subsurface",
          title: 'Subsurface',
          description: "Courses about the fabrication of a Low Cost Subsurface AUV",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/subsurface/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Teusner", "_blank");
        },
      },{
        id: 'social-hal_id',
        title: 'Hal_id',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/quentinbrateau", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1553-9549", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=buInD9kAAAAJ", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@quentinbrateau8193", "_blank");
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
