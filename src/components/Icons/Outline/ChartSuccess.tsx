
import ChartSuccess from "../../../assets/outline/ChartSuccess.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChartSuccessIcon({ className, dataTestid = "ChartSuccessIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ChartSuccess data-testid={dataTestid} className={classes} {...rest} />
  );
}
