
import Celsius from "../../../assets/outline/Celsius.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CelsiusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Celsius} data-testid="CelsiusIcon" className={classes} />
  );
}
