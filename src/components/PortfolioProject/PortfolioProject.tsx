import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
   ButtonsWrapper,
   Description,
   GitHub,
   Link,
   ProjectImg,
   Root,
   TextWrapper,
   Title,
   Subtitle,
} from "./PortfolioProject.css";
import { ProjectProps } from "interfaces";

export default function PortfolioProject({
   background,
   description,
   github,
   link,
   name,
}: ProjectProps) {
   return (
      <Root>
         <Title children={name} />
         <ProjectImg background={background} />

         <TextWrapper>
            <Subtitle children="Description" />
            <Description children={description} />
            <ButtonsWrapper>
               <Link href={link} target="_blank" children="open project" />
               <GitHub
                  href={github}
                  target="_blank"
                  children={
                     <>
                        <FontAwesomeIcon icon={faGithub} />
                        {" github"}
                     </>
                  }
               />
            </ButtonsWrapper>
         </TextWrapper>
      </Root>
   );
}
