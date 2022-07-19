
import Forward10Seconds from "../../../assets/outline/Forward10Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Forward10SecondsIcon({ className, dataTestid = "Forward10SecondsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Forward10Seconds data-testid={dataTestid} className={classes} {...rest} />
  );
}
