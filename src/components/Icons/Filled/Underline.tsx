
import Underline from "../../../assets/filled/Underline.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UnderlineIcon({ className, dataTestid = "UnderlineIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Underline data-testid={dataTestid} className={classes} {...rest} />
  );
}
