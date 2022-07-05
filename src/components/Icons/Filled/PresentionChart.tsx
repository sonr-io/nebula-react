
import PresentionChart from "../../../assets/filled/PresentionChart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PresentionChartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PresentionChart data-testid="PresentionChartIcon" className={classes} />
  );
}
