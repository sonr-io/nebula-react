
import Flag from "../../../assets/outline/Flag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlagIcon({ className, dataTestid = "FlagIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Flag data-testid={dataTestid} className={classes} {...rest} />
  );
}
