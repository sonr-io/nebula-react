
import Forward5Seconds from "../../../assets/duotone/Forward5Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Forward5SecondsIcon({ className, dataTestid = "Forward5SecondsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Forward5Seconds data-testid={dataTestid} className={classes} {...rest} />
  );
}
