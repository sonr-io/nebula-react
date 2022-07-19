
import ArrowUp3 from "../../../assets/duotone/ArrowUp3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowUp3Icon({ className, dataTestid = "ArrowUp3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowUp3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
