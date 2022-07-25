
import ArrowSwap from "../../../assets/filled/ArrowSwap.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSwapIcon({ className, dataTestid = "ArrowSwapIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowSwap data-testid={dataTestid} className={classes} {...rest} />
  );
}
