
import Backward from "../../../assets/duotone/Backward.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BackwardIcon({ className, dataTestid = "BackwardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Backward data-testid={dataTestid} className={classes} {...rest} />
  );
}
