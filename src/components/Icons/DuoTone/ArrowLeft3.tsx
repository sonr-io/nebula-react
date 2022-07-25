
import ArrowLeft3 from "../../../assets/duotone/ArrowLeft3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowLeft3Icon({ className, dataTestid = "ArrowLeft3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowLeft3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
