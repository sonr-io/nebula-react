
import Celsius from "../../../assets/duotone/Celsius.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CelsiusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Celsius data-testid="CelsiusIcon" className={classes} />
  );
}