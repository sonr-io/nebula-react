
import Chart from "../../../assets/duotone/Chart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Chart} data-testid="ChartIcon" className={classes} />
  );
}
