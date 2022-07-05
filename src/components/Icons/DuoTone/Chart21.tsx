
import Chart21 from "../../../assets/duotone/Chart21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Chart21Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Chart21 data-testid="Chart21Icon" className={classes} />
  );
}
