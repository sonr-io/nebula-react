
import Firstline from "../../../assets/duotone/Firstline.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FirstlineIcon({ className, dataTestid = "FirstlineIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Firstline data-testid={dataTestid} className={classes} {...rest} />
  );
}
