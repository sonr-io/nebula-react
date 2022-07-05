
import CallMinus from "../../../assets/outline/CallMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CallMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CallMinus data-testid="CallMinusIcon" className={classes} />
  );
}
