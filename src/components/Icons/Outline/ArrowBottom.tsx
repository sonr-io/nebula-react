
import ArrowBottom from "../../../assets/outline/ArrowBottom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowBottomIcon({ className, dataTestid = "ArrowBottomIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowBottom data-testid={dataTestid} className={classes} {...rest} />
  );
}
