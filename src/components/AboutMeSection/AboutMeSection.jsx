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
            <Subtitle children="It is a lon established fact that a reader will be distracted by the readable content." />
            <Text children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magma aliwqua. Ut enim ad nimin veniam, quis nostrudn exracition ullamo laboris nisi ut aliquie ex ae commodo consequeat duis aute urure dolor in reprehened." />
         </TextWrapper>
      </Root>
   );
}
