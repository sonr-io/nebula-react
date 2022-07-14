
import Driver from "../../../assets/duotone/Driver.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DriverIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Driver} data-testid="DriverIcon" className={classes} />
  );
}
