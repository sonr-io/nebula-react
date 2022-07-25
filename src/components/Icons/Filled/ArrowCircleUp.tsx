
import ArrowCircleUp from "../../../assets/filled/ArrowCircleUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowCircleUpIcon({ className, dataTestid = "ArrowCircleUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowCircleUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
