import { Root } from "./Grid.css";

import { OnlyChilrenProps } from "interfaces";

export default function Grid({ children }: OnlyChilrenProps) {
   return <Root children={children} />;
}
