
import ChartSuccess from "../../../assets/outline/ChartSuccess.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChartSuccessIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ChartSuccess} data-testid="ChartSuccessIcon" className={classes} />
  );
}
