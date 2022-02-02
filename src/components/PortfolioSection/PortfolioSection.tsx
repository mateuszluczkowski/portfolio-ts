import { Grid, Root, Subtitle, Title } from "./PortfolioSection.css";
import { PortfolioProject } from "components";
import { projects } from "data";

export default function PortfolioSection() {
   return (
      <Root>
         <Title children="Check out my most important projects" />
         <Subtitle
            children="
I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."
         />
         <Grid>
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
            {/* <PortfolioProject gridArea={"mainProject"} background={sztukaImg} /> */}
         </Grid>
      </Root>
   );
}

/////next step: take data from the data folder and render PortolioPoject by map function
