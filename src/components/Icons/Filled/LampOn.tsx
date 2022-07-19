
import LampOn from "../../../assets/filled/LampOn.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LampOnIcon({ className, dataTestid = "LampOnIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LampOn data-testid={dataTestid} className={classes} {...rest} />
  );
}
