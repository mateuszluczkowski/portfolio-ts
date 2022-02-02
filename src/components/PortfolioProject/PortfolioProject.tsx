import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
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
         <ProjectImg src={background} />
         <TextWrapper>
            <Subtitle children="Description" />
            <Description children={description} />
            <Link href={link} />
            <GitHub
               href={github}
               children={
                  <>
                     <FontAwesomeIcon icon={faGithub} />
                     {"github"}
                  </>
               }
            />
         </TextWrapper>
      </Root>
   );
}
