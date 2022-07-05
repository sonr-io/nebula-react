
import ChartSquare from "../../../assets/outline/ChartSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ChartSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ChartSquare data-testid="ChartSquareIcon" className={classes} />
  );
}
