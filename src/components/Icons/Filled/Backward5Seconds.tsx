
import Backward5Seconds from "../../../assets/filled/Backward5Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Backward5SecondsIcon({ className, dataTestid = "Backward5SecondsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Backward5Seconds data-testid={dataTestid} className={classes} {...rest} />
  );
}
