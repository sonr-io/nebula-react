
import Driver from "../../../assets/outline/Driver.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DriverIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Driver data-testid="DriverIcon" className={classes} />
  );
}
