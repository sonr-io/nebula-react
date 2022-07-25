
import ArrowUp from "../../../assets/duotone/ArrowUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowUpIcon({ className, dataTestid = "ArrowUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
