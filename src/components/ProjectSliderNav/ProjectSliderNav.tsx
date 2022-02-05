import {
   ArrowButton,
   Dots,
   SingleDot,
   SingleDotWrapper,
   Root,
} from "./ProjectSliderNav.css";
import { projects } from "data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faChevronLeft,
   faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { ProjectSliderNavProps } from "interfaces";

export default function ProjectSliderNav({
   activeIndex,

   setActiveIndex,
}: ProjectSliderNavProps) {
   const lastIndex = projects.length - 1;
   const changeActiveIndex = (direction: "next" | "prev") => {
      const isNext = direction === "next";
      const newIndex = activeIndex + (isNext ? 1 : -1);
      if (newIndex > lastIndex) return;
      else if (newIndex < 0) return;
      setActiveIndex(newIndex);
   };
   return (
      <Root>
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
               <SingleDotWrapper onClick={() => setActiveIndex(project.id)}>
                  <SingleDot
                     className={activeIndex === project.id ? "active" : ""}
                     key={project.name}
                  />
               </SingleDotWrapper>
            ))}
         </Dots>
      </Root>
   );
}
