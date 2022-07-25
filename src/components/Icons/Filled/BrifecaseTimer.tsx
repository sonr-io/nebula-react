
import BrifecaseTimer from "../../../assets/filled/BrifecaseTimer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrifecaseTimerIcon({ className, dataTestid = "BrifecaseTimerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BrifecaseTimer data-testid={dataTestid} className={classes} {...rest} />
  );
}
