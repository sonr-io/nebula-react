
import BackwardItem from "../../../assets/outline/BackwardItem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BackwardItemIcon({ className, dataTestid = "BackwardItemIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BackwardItem data-testid={dataTestid} className={classes} {...rest} />
  );
}
