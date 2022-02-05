import { useState } from "react";
import { ProjectSliderNav } from "components";
import { Content, Root } from "./ProjectSlider.css";
import { projects } from "data";
import { PortfolioProject } from "components";
export default function ProjectSlider() {
   const [activeIndex, setActiveIndex] = useState(0);

   const { img, description, github, gridArea, id, link, name } =
      projects[activeIndex];

   return (
      <Root>
         <ProjectSliderNav
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
         />
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
