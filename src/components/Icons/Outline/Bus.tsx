
import Bus from "../../../assets/outline/Bus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bus data-testid="BusIcon" className={classes} />
  );
}
