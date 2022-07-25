
import RotateLeft1 from "../../../assets/duotone/RotateLeft1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RotateLeft1Icon({ className, dataTestid = "RotateLeft1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RotateLeft1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
