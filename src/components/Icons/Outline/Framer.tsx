
import Framer from "../../../assets/outline/Framer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FramerIcon({ className, dataTestid = "FramerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Framer data-testid={dataTestid} className={classes} {...rest} />
  );
}
