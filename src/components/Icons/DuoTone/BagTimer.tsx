
import BagTimer from "../../../assets/duotone/BagTimer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagTimerIcon({ className, dataTestid = "BagTimerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BagTimer data-testid={dataTestid} className={classes} {...rest} />
  );
}
