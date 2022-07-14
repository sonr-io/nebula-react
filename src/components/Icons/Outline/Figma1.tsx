
import Figma1 from "../../../assets/outline/Figma1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Figma1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Figma1} data-testid="Figma1Icon" className={classes} />
  );
}
