
import ChartFail from "../../../assets/outline/ChartFail.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChartFailIcon({ className, dataTestid = "ChartFailIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ChartFail data-testid={dataTestid} className={classes} {...rest} />
  );
}
