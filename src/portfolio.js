/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Varun Gupta",
  title: "Hi, I'm Varun",
  subTitle: emoji(
    "Passionate about crafting cutting-edge web solutions to tackle real-world challenges with innovation and creativity. Committed to excellence, I transform ideas into impactful, user-centric designs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10QmLH9azh5NGOKiso7cwP8M8K-hL09uy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/varungupta1729",
  linkedin: "https://www.linkedin.com/in/varungupta-merndeveloper/",
  gmail: "varunshivhare1729gmail.com",
  leetcode : "https://leetcode.com/u/varungupta1729/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "My skills span both frontend and backend development, utilizing technologies like HTML5, CSS, SCSS, Tailwind, Bootstrap, JavaScript, TypeScript, ReactJS, Redux, jQuery, Node.js, Express.js, and Mongoose.js. I am also experienced with databases such as MongoDB, MySQL, and Firebase."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KIET Group of Institutions , Ghaziabad",
      logo: require("./assets/images/kiet.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "November 2021 – June 2025",
      desc: "(8.3 CGPA)",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Suditi Global Academy , Etawah",
      logo: require("./assets/images/suditi.png"),
      subHeader: "Intermediate",
      duration: "April 2019 – March 2020",
      desc: " CBSE (94%) ",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Delhi Public School , Etawah",
      logo: require("./assets/images/dps.png"),
      subHeader: "High School ",
      duration: "September 2013 - April 2017",
      desc: "CBSE (90%)",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Develoment",
      company: "IBM Skillbuild",
      link:"https://drive.google.com/file/d/1hiVDecJXfGuz8mzNaG2BzwA9h3GGrWE8/view?usp=sharing",
      date: "June 2023 – July 2023",
      desc: "Completed an internship by IBM SkillBuild by Edunet Foundation under AICTE on Frontend Development.",
   
    },
    {
      role: "Ai-ML Virtual Internship",
      company: "EduSkills supported by AWS",
      link:"https://drive.google.com/file/d/1xz9VCdSoeybkRV-Pm2RwQKFZP2nYNP_m/view?usp=sharing",
      date: "August 2023 – September 2023",
      desc: "Completed an virtual internship on AI-ML by EduSkills supported by AWS Academy."
    },
    {
      role: "Frontend Development",
      company: "IIPC of KIET",
      link: "https://drive.google.com/file/d/1x2qtEmiyWfa574lMVSDwkTXDpvirC6fG/view?usp=sharing",
      date: "August 2022 - September 2022",
      desc: "Completed an internship organized by IIPC of KIET Group of Institutions on Mini Project in Advanced C."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Full Stack MERN Projects",
  projects: [
    {
      image: require("./assets/images/black logo.png"),
      imageDark: require("./assets/images/squarelogo-removebg-preview.png"),
      projectName: "WeDesigneTees",
      projectDesc: "Full Stack Tshirt purchasing website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://we-designe-tees.vercel.app/"
        },
        {
          name: "Github",
          url: "https://github.com/varungupta1729/WeDesigneTees"
        },{
          name: "Video",
          url: "https://www.youtube.com/watch?v=vxWTz7_SAVI&feature=youtu.be"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Logo-Full-Dark.png"),
      imageDark: require("./assets/images/Logo-Full-Light.png"),
      projectName: "EdTech Platform",
      projectDesc: "Students course purchasing website ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://edtech-platform-varungupta.vercel.app/"
        },  {
          name: "Github",
          url: "https://github.com/varungupta1729/EdTech-Platform"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Check my Github for Code",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://netflix-gpt-seven-opal.vercel.app/",
      title: "NetflixGPT AI Based Searching",
      description:
        "https://i.vimeocdn.com/video/819551533-dfd46d6942c6050ca267448c424f18a437d10ad8e95d1897ec5c77a8ecf7344d-d_640?f=webp"
    },
    {
      url: "https://wedesigneteescustome.vercel.app/",
      title: "3D Tshirt Customization",
      description:
        "https://cdn3.f-cdn.com//files/download/205877223/3dShirt.png?fit=crop"
    },
    {
      url: "https://quiz-app-eta-ashy.vercel.app/",
      title: "Quiz App",
      description:
        "https://repository-images.githubusercontent.com/182525249/aadd7a80-54fe-11eb-9872-ccd06b8789b6"
    },
    {
      url: "https://carts-learning.vercel.app/",
      title: "Learning Add to Cart",
      description:
        "https://blendcommerce.com/cdn/shop/articles/ATC_header.png?v=1647348950"
    },
    {
      url: "https://food-recipe-for-learning.vercel.app/",
      title: "Food Recipe App",
      description:
        "https://cdn.mos.cms.futurecdn.net/5rReTf4Cyr6CmhYLv2BWz4.jpg"
    },
    {
      url: "https://www.wedesignetees.com/",
      title: "Wholesale Tshirt",
      description:
        "https://www.shutterstock.com/image-vector/tshirt-vector-icon-set-clothing-260nw-2284531331.jpg"
    },
    {
      url: "https://react-basic-projects-for-learning.vercel.app/",
      title: "Learning React",
      description:
        "https://media.licdn.com/dms/image/C511BAQF8F2Wry9GTXQ/company-background_10000/0/1584269093982/reactofficial_cover?e=2147483647&v=beta&t=TMIox6sTR3227DIw-2U1I_gk7cqj7xktbb2OkKNfvo4"
    },
    {
      url: "https://varungupta1729.github.io/SnakeGame-MiniProject/",
      title: "Snake Game",
      description:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-d1D3os2A_8b4UvQDEaM7N0JbkcYxYvM5A&s"
    },
    {
      url: "https://ibm-clone-website.vercel.app/",
      title: "Amazon Clone",
      description:
        "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/07/amazon-1200x537-1-1531806703.jpg"
    },
    {
      url: "https://varungupta1729.github.io/Fyle-Task/",
      title: "Learning Html , Css , Javascript",
      description:
        "https://www.web-development-institute.com/wp-content/uploads/2017/04/7-Important-Tips-for-Smart-Coding-in-HTML-CSS-and-JavaScript.jpg"
    },
    {
      url: "https://varungupta1729.github.io/Rock-Paper-Scissor_Mini-Project/",
      title: "Rock Paper Scissor Game",
      description:
        "https://i.ytimg.com/vi/qWPtKtYEsN4/maxresdefault.jpg"
    },
    {
      url: "https://varungupta1729.github.io/Stopwatch-MiniProject/",
      title: "Stopwatch",
      description:
        "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/53325b89de8c.png"
    },
    {
      url: "https://task-tracker-mini-project.vercel.app/",
      title: "Task Tracker",
      description:
        "https://logopond.com/logos/d11a4477ce62b0937219c93dc7e08f93.png"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7617730973",
  email_address: "varunshivhare1729@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
