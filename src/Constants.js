import BUDGET from "./assets/Projects/budget.JPG";
import NOTETAKER from "./assets/Projects/notetaker.JPG";
import PASSWORD from "./assets/Projects/password.jpg";
import TECHBLOG from "./assets/Projects/techblog.JPG";
import WEATHER from "./assets/Projects/weather.jpg";
import BOOKSEARCH from  "./assets/Projects/booksearch.JPG"

export const PROJECTS = [
  {
    image: BOOKSEARCH,
    name: "Book Search Engine",
    technologyUsed: "MERN Stack",
    giturl: "https://github.com/lkalicki/book-search-engine",
    appurl: "https://lkalicki-book-search-engine.herokuapp.com/"
  },
  {
    image: BUDGET,
    name: "Budget Tracker",
    technologyUsed: "Progressive Web Applications",
    giturl: "https://github.com/lkalicki/budget-tracker",
    appurl: "https://lkalicki-budget-tracker.herokuapp.com/"
  },
  {
    image: NOTETAKER,
    name: "Note Taker",
    technologyUsed: "Express.js",
    giturl: "https://github.com/lkalicki/note-taker",
    appurl: "https://lkalicki-note-taker.herokuapp.com"
  },
  {
    image: PASSWORD,
    name: "Password Generator",
    technologyUsed: "Javascript",
    giturl: "https://github.com/lkalicki/password-generator",
    appurl: "https://lkalicki.github.io/password-generator/"
  },
  {
    image: TECHBLOG,
    name: "MC Tech Blog",
    technologyUsed: "Model-View-Controller",
    giturl: "https://github.com/lkalicki/mvc-tech-blog",
    appurl: "https://lkalicki-mvc-tech-blog.herokuapp.com/"
  },
  {
    image: WEATHER,
    name: "Weather Dashboard",
    technologyUsed: "Server-side APIs",
    giturl: "https://github.com/lkalicki/weather-dashboard",
    appurl: "https://lkalicki.github.io/weather-dashboard"
  },
];

export const SKILLS = [
  { name: "JavaScript", initialRating: 4 },
  { name: "React.js", initialRating: 3 },
  { name: "Node.js", initialRating: 4 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Unit-Testing(Jest)", initialRating: 3 },
  { name: "Graphql", initialRating: 3 },
  { name: "Git", initialRating: 4.5 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Heroku"]
