
import Figma from "../../../assets/filled/Figma.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FigmaIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Figma} data-testid="FigmaIcon" className={classes} />
  );
}
