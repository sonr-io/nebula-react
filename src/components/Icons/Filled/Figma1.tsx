
import Figma1 from "../../../assets/filled/Figma1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Figma1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Figma1 data-testid="Figma1Icon" className={classes} />
  );
}
