
import ArrowDown from "../../../assets/outline/ArrowDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowDown} data-testid="ArrowDownIcon" className={classes} />
  );
}
