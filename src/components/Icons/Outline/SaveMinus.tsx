
import SaveMinus from "../../../assets/outline/SaveMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SaveMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SaveMinus} data-testid="SaveMinusIcon" className={classes} />
  );
}
