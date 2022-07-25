
import ArrowUp1 from "../../../assets/outline/ArrowUp1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowUp1Icon({ className, dataTestid = "ArrowUp1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowUp1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
