import {
   Background,
   Name,
   SubText,
   Text,
   TextWrapper,
   PhotoWrapper,
   Portrait,
   Profession,
   Root,
} from "./Header.css";

import portraitWebp from "assets/img/cs.webp";

export default function Header() {
   return (
      <Root>
         <TextWrapper>
            <SubText children="Hello, My name is" />
            <Name children="Mateusz Łuczkowski" />
            <Profession children="Front End Developer" />
            <Text children="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores." />
         </TextWrapper>
         <PhotoWrapper>
            <Portrait src={portraitWebp} />
            <Background />
         </PhotoWrapper>
      </Root>
   );
}
