import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
   Background,
   Description,
   GitHubLink,
   Elements,
   Link,
   Root,
   Title,
   Subtitle,
} from "./PortfolioProject.css";
import { ProjectProps } from "interfaces";

export default function PortfolioProject({
   background,
   description,
   github,
   gridArea,
   link,
   name,
}: ProjectProps) {
   return (
      <Root gridArea={gridArea}>
         <Background src={background} />
         <Elements>
            <Title children={name} />
            <GitHubLink
               children={
                  <>
                     <FontAwesomeIcon icon={faGithub} /> {"github"}
                  </>
               }
               href={github}
            />
            <Link href={link} children="Open project" />
            <Subtitle children="Description" />
            <Description children={description} />
         </Elements>
      </Root>
   );
}
