
import RotateLeft from "../../../assets/outline/RotateLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RotateLeftIcon({ className, dataTestid = "RotateLeftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RotateLeft data-testid={dataTestid} className={classes} {...rest} />
  );
}
