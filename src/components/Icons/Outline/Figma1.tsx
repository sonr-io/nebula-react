
import Figma1 from "../../../assets/outline/Figma1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Figma1Icon({ className, dataTestid = "Figma1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Figma1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
