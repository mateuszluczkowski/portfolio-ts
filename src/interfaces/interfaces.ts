export interface OnlyChilrenProps {
   children: React.ReactNode;
}

export interface PortraitProps {
   src: string;
}

export interface ProjectProps {
   gridArea: string;
   background: string;
   link: string;
   github: string;
   name: string;
   description: string;
}

export interface ProjectPropsStyled {
   gridArea: string;
}

export interface ProjectSliderButton {
   isLeft: number;
}

export interface ProjectSliderNavProps {
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface ProjectImgProps {
   background: string;
}
