import {
   Img,
   ImgWrapper,
   Text,
   TextWrapper,
   Title,
   Subtitle,
   Root,
   PhotoPart,
} from "./AboutMeSection.css";

import portrait from "assets/img/me.webp";
export default function AboutMeSection() {
   return (
      <Root>
         <PhotoPart>
            <ImgWrapper>
               <Img src={portrait} />
            </ImgWrapper>
         </PhotoPart>

         <TextWrapper>
            <Title children="About me" />
            <Subtitle children="Hello, My name is Mateusz. I’ve been learning JavaScript for a year. My goal is find a job as a Front End Developer." />
            <Text children=" Before that, I worked as customer advisor. For sure that job has taught me  to be persistent in pursuing my goals and be able to work with people. When it comes to my most important skills, I can certainly mention: accuracy, reliability and commitment. I’m a person who just loves challanges and  tries to learn something new every day. Programming gives me this opportunity and gives me satisfaction. It is a guarantee of development for me." />
         </TextWrapper>
      </Root>
   );
}
