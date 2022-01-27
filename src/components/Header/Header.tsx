import { useEffect, useState } from "react";

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

const professtionText = [
   "Front End Developer",
   "ReactJS",
   "NodeJS",
   "MongoDB",
   "TypeScript",
];

export default function Header() {
   const [currentIndex, setCurrentIndex] = useState<number>(0);
   const text: string = professtionText[currentIndex];
   const switchProfessionText = () =>
      setCurrentIndex((prevIndex) => {
         const nextIndex = prevIndex + 1;
         return nextIndex >= professtionText.length ? 0 : nextIndex;
      });
   console.log(currentIndex);
   useEffect(() => {
      const switchInterval = setInterval(() => switchProfessionText(), 10000);
      return () => clearInterval(switchInterval);
   });
   return (
      <Root>
         <TextWrapper>
            <SubText children="Hello, My name is" />
            <Name children="Mateusz Łuczkowski" />
            <Profession children={text} />
            <Text children="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores." />
         </TextWrapper>
         <PhotoWrapper>
            <Portrait src={portraitWebp} />
            <Background />
         </PhotoWrapper>
      </Root>
   );
}
