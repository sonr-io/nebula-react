
import Chart2 from "../../../assets/duotone/Chart2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Chart2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Chart2 data-testid="Chart2Icon" className={classes} />
  );
}
