
import CallMinus from "../../../assets/filled/CallMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CallMinus} data-testid="CallMinusIcon" className={classes} />
  );
}
