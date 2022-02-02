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
   return (
      <Root>
         <Navigation>
            <ArrowButton
               isLeft={1}
               children={<FontAwesomeIcon icon={faChevronLeft} />}
            />
            <ArrowButton
               isLeft={-1}
               children={<FontAwesomeIcon icon={faChevronRight} />}
            />
            <Dots>
               <SingleDot />
            </Dots>
         </Navigation>
         <Content>
            <PortfolioProject
               background={projects[0].img}
               description={projects[0].description}
               github={projects[0].github}
               gridArea={projects[0].gridArea}
               key={projects[0].id}
               link={projects[0].link}
               name={projects[0].name}
            />
         </Content>
      </Root>
   );
}

// <PortfolioProject
//                      background={img}
//                      description={description}
//                      github={github}
//                      gridArea={gridArea}
//                      key={id}
//                      link={link}
//                      name={name}
//                   />
