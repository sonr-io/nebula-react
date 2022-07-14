
import Chart3 from "../../../assets/duotone/Chart3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Chart3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Chart3 data-testid="Chart3Icon" className={classes} />
  );
}
