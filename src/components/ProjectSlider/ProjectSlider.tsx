import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faChevronLeft,
   faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
   ArrowButton,
   Content,
   Dots,
   Navigation,
   Root,
   SingleDot,
} from "./ProjectSlider.css";
import { projects } from "data";
import { PortfolioProject } from "components";
export default function ProjectSlider() {
   const [activeIndex, setActiveIndex] = useState(0);
   const lastIndex = projects.length - 1;
   const changeActiveIndex = (direction: "next" | "prev") => {
      const isNext = direction === "next";
      const newIndex = activeIndex + (isNext ? 1 : -1);
      if (newIndex > lastIndex) return;
      else if (newIndex < 0) return;
      setActiveIndex(newIndex);
   };
   const { img, description, github, gridArea, id, link, name } =
      projects[activeIndex];

   return (
      <Root>
         <Navigation>
            <ArrowButton
               onClick={() => changeActiveIndex("prev")}
               isLeft={1}
               className={activeIndex === 0 ? "disabled" : ""}
               children={<FontAwesomeIcon icon={faChevronLeft} />}
            />
            <ArrowButton
               onClick={() => changeActiveIndex("next")}
               isLeft={-1}
               className={activeIndex === lastIndex ? "disabled" : ""}
               children={<FontAwesomeIcon icon={faChevronRight} />}
            />
            <Dots>
               {projects.map((project) => (
                  <SingleDot
                     className={activeIndex === project.id ? "active" : ""}
                     key={project.name}
                     onClick={() => setActiveIndex(project.id)}
                  />
               ))}
            </Dots>
         </Navigation>
         <Content>
            <PortfolioProject
               background={img}
               description={description}
               github={github}
               gridArea={gridArea}
               key={id}
               link={link}
               name={name}
            />
         </Content>
      </Root>
   );
}
