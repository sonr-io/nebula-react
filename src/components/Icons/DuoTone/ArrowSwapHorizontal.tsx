
import ArrowSwapHorizontal from "../../../assets/duotone/ArrowSwapHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSwapHorizontalIcon({ className, dataTestid = "ArrowSwapHorizontalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowSwapHorizontal data-testid={dataTestid} className={classes} {...rest} />
  );
}
