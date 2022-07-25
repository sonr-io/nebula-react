
import ArrowLeft from "../../../assets/duotone/ArrowLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowLeftIcon({ className, dataTestid = "ArrowLeftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowLeft data-testid={dataTestid} className={classes} {...rest} />
  );
}
