
import ChartFail from "../../../assets/filled/ChartFail.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ChartFailIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ChartFail data-testid="ChartFailIcon" className={classes} />
  );
}
