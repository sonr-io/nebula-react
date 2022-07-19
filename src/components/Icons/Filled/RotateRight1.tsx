
import RotateRight1 from "../../../assets/filled/RotateRight1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RotateRight1Icon({ className, dataTestid = "RotateRight1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RotateRight1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
