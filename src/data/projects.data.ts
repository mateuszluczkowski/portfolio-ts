import sztukaImg from "assets/img/projects/sztukaOtwartosci.webp";
import minesweeperImg from "assets/img/projects/minesweeper.webp";
import herbaciarniaImg from "assets/img/projects/herbaciarnia.webp";
import todosImg from "assets/img/projects/todos.webp";
import priceSliderImg from "assets/img/projects/price-slider.webp";
export const projects = [
   {
      id: 0,
      name: "Sztuka Otwartości",
      description: "lorem ipsum hehe",
      img: sztukaImg,
      github: "https://github.com/",
      link: "https://openlink.com/",
      gridArea: "mainProject",
   },
   {
      id: 1,
      name: "Herbaciarnia ziołowa",
      description: "lorem ipsum hehe",
      img: herbaciarniaImg,
      github: "https://github.com/mateuszluczkowski/herbaciarnia-react",
      link: "https://herbaciarniaziolowareact.herokuapp.com/",
      gridArea: "project1",
   },
   {
      id: 2,
      name: "Price slider ",
      description:
         "component sets the final price of subscription, you can use toggler for choose yearly or monthly method and slider bar to select a product option",
      img: priceSliderImg,
      github:
         "https://github.com/mateuszluczkowski/react-mentor-interactive-pricing-slider",
      link: "https://mateuszluczkowski.github.io/react-mentor-interactive-pricing-slider/",
      gridArea: "project2",
   },
   {
      id: 3,
      name: "Redux Todos App",
      description:
         "Todo List with status filter and with the possibility of drag and drop task. Two themes dark and light, to switch them just click on the sun/moon icon.",
      img: todosImg,
      github: "https://github.com/mateuszluczkowski/react-mentor-redux-todo",
      link: "https://mateuszluczkowski.github.io/react-mentor-redux-todo/",
      gridArea: "project3",
   },
   {
      id: 4,
      name: "JS Game - Minesweeper",
      description:
         "The all-known old windows game :) Project made with pure JS.",
      img: minesweeperImg,
      github: "https://github.com/mateuszluczkowski/js-game-minesweeper",
      link: "https://mateuszluczkowski.github.io/js-game-minesweeper/",
      gridArea: "project4",
   },
];
