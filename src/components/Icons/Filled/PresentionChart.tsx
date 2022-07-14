
import PresentionChart from "../../../assets/filled/PresentionChart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PresentionChartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PresentionChart} data-testid="PresentionChartIcon" className={classes} />
  );
}
