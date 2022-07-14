
import Sun from "../../../assets/outline/Sun.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SunIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Sun} data-testid="SunIcon" className={classes} />
  );
}
