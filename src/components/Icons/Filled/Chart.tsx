
import Chart from "../../../assets/filled/Chart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChartIcon({ className, dataTestid = "ChartIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Chart data-testid={dataTestid} className={classes} {...rest} />
  );
}
