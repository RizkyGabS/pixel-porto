import playerImage from "../assets/shigeo.jpg";
import questImage2 from "../assets/questimage2.png";
import questImage3 from "../assets/questimage3.png";

export const PLAYER_DATA = {
  name: "RIZGABS_DEV",
  level: 24,
  class: "Full-Stack Mage",
  hp: "100/100",
  mp: "95/100",
  image: playerImage,
  bio: "A passionate web developer who treats coding like a massive multiplayer RPG. I specialize in backend development, system design, and building performant web infrastructure. Always ready for the next side-quest.",
};

export const SKILL_TREE = [
  { name: "JavaScript", type: "Core", level: 90 },
  { name: "Git", type: "Version Control", level: 85 },
  { name: "Node.js & Express", type: "Backend", level: 75 },
  { name: "PostgreSQL", type: "Database", level: 70 },
  { name: "Docker", type: "Containerization", level: 65 },
  { name: "Python", type: "Scripting", level: 60 },
];

export const QUEST_LOG = [
  {
    id: 1,
    title: "Stress Detection App",
    link: "#",
    image: questImage2,
    type: "Main Quest",
    desc: "Stress Detection is an application that utilize machine learning to provide face recognition and analyze stress level from short surveys. The application focuses on the 3 stress level : low, moderate, and high level.",
    tech: ["Express", "Python", "Google Cloud"],
    link: "https://github.com/RizkyGabS/stress-detection-app"
  },
  {
    id: 2,
    title: "Smart Clothesline",
    link: "#",
    image: questImage3,
    type: "Side Quest",
    desc: "This clothesline can move using a servo. The indicator that drives the servo is taken from the DHT sensor and photoresistor. The sensor will send data to ESP-32, the servo will move according to the conditions that are met.",
    tech: ["Python", "IOT", "MQTT"],
    link: "https://github.com/RizkyGabS/Jemuran-Pintar"
  },
  {
    id: 3,
    title: "JogBatik Landing Page",
    type: "Mini-Game",
    desc: "This project is one of the college assignments in the implementation of digital marketing knowledge on a landing page.",
    tech: ["HTML", "CSS"],
    link: "#"
  }
];