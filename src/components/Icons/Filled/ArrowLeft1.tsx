
import ArrowLeft1 from "../../../assets/filled/ArrowLeft1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowLeft1Icon({ className, dataTestid = "ArrowLeft1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowLeft1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
