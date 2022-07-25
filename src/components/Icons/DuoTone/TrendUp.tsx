
import TrendUp from "../../../assets/duotone/TrendUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrendUpIcon({ className, dataTestid = "TrendUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TrendUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
