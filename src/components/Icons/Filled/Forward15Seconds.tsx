
import Forward15Seconds from "../../../assets/filled/Forward15Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Forward15SecondsIcon({ className, dataTestid = "Forward15SecondsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Forward15Seconds data-testid={dataTestid} className={classes} {...rest} />
  );
}
