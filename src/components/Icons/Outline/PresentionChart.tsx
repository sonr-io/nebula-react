
import PresentionChart from "../../../assets/outline/PresentionChart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PresentionChartIcon({ className, dataTestid = "PresentionChartIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PresentionChart data-testid={dataTestid} className={classes} {...rest} />
  );
}
