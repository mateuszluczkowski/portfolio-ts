import { Root } from "./Grid.css";

import { GridProps } from "interfaces";

export default function Grid({ children }: GridProps) {
   return <Root children={children} />;
}
