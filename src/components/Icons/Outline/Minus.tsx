
import Minus from "../../../assets/outline/Minus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Minus} data-testid="MinusIcon" className={classes} />
  );
}
