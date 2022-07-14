
import ChartFail from "../../../assets/filled/ChartFail.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChartFailIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ChartFail} data-testid="ChartFailIcon" className={classes} />
  );
}
