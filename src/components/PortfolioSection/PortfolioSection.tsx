import { Root, Subtitle, Title } from "./PortfolioSection.css";
import { ProjectSlider } from "components";

const titleData = "Check out my most important projects";
const subtitleData =
   "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.";

export default function PortfolioSection() {
   return (
      <Root>
         <Title children={titleData} />
         <Subtitle children={subtitleData} />
         <ProjectSlider />
         {/* <Grid>
            {projects.map(
               ({ description, id, name, gridArea, img, github, link }) => (
                  <PortfolioProject
                     background={img}
                     description={description}
                     github={github}
                     gridArea={gridArea}
                     key={id}
                     link={link}
                     name={name}
                  />
               )
            )}
         </Grid> */}
      </Root>
   );
}
