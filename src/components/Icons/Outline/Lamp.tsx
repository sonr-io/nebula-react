
import Lamp from "../../../assets/outline/Lamp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LampIcon({ className, dataTestid = "LampIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Lamp data-testid={dataTestid} className={classes} {...rest} />
  );
}
