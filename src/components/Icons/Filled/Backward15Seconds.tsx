
import Backward15Seconds from "../../../assets/filled/Backward15Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Backward15SecondsIcon({ className, dataTestid = "Backward15SecondsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Backward15Seconds data-testid={dataTestid} className={classes} {...rest} />
  );
}
