
import Celsius from "../../../assets/filled/Celsius.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CelsiusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Celsius data-testid="CelsiusIcon" className={classes} />
  );
}
