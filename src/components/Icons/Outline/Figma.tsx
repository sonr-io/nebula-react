
import Figma from "../../../assets/outline/Figma.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FigmaIcon({ className, dataTestid = "FigmaIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Figma data-testid={dataTestid} className={classes} {...rest} />
  );
}
