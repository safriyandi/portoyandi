import portfolioImg01 from "../images/simdes.png";
import portfolioImg02 from "../images/mitrabumdes.png";
import portfolioImg03 from "../images/appspyd.png";
import portfolioImg04 from "../images/paybis.png";
// import portfolioImg05 from "../images/portfolio-05.jpg";
// import portfolioImg06 from "../images/portfolio-06.jpg";
// import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Product Manager",
    title: "Simpeldesa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React Native", "Bootstrap css", "PHP DJango", "MongoDB"],
    siteUrl: "https://play.google.com/store/apps/details?id=com.simpeldesa&hl=id&gl=US&pli=1",
   
  },
  // {
  //   id: "02",
  //   imgUrl: portfolioImg04,
  //   category: "QA Engineer",
  //   title: "Paydia Bisnis",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Product Manager",
    title: "Mitra Bumdes by Simpeldesa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Flutter", "Tailwind css", "PHP Django", "MongoDB"],
    siteUrl: "https://play.google.com/store/apps/details?id=com.bumdes",
  },
  // {
  //   id: "04",
  //   imgUrl: portfolioImg05,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "05",
  //   imgUrl: portfolioImg03,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },

  // {
  //   id: "06",
  //   imgUrl: portfolioImg06,
  //   category: "Ux",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "07",
  //   imgUrl: portfolioImg07,
  //   category: "Web Design",
  //   title: "Appointment Booking Website",
  //   description:
  //     `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim,
  //       temporibus dignissimos atque repellendus amet a velit. Dolorem quidem 
  //       animi doloribus saepe!`,
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "08",
  //   imgUrl: portfolioImg01,
  //   category: "Web Design",
  //   title: "Finance Technology Website",
  //   description:
  //     `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  //     Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
  //     temporibus dignissimos atque repellendus amet a velit. Dolorem 
  //     quidem animi doloribus saepe!`,
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "09",
  //   imgUrl: portfolioImg02,
  //   category: "Product Manager",
  //   title: "Mitra Bumdes by Simpeldesa",
  //   description:
  //     `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  //     Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque 
  //     repellendus amet a velit. Dolorem quidem animi doloribus saepe!`,
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  {
    id: "10",
    imgUrl: portfolioImg03,
    category: "QA Engineer",
    title: "Paydia Wallet",
    description:
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim,
       temporibus dignissimos atque repellendus amet a velit. Dolorem 
       quidem animi doloribus saepe!`,
    technologies: ["React", "Tailwind css", "PHP", "MySQLDB"],
    siteUrl: "https://play.google.com/store/apps/details?id=id.paydia.app&hl=id-ID",
  },
  {
    id: "11",
    imgUrl: portfolioImg04,
    category: "QA Engineer",
    title: "Paydia Bisnis",
    description:
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
      temporibus dignissimos atque repellendus amet a velit. Dolorem quidem 
      animi doloribus saepe!`,
    technologies: ["React", "Tailwind css", "PHP & Node", "MySQLDB"],
    siteUrl: "https://paydia.id/",
  },
  // {
  //   id: "12",
  //   imgUrl: portfolioImg05,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "13",
  //   imgUrl: portfolioImg06,
  //   category: "Web Design",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "14",
  //   imgUrl: portfolioImg07,
  //   category: "ux",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
];

export default portfolios;
