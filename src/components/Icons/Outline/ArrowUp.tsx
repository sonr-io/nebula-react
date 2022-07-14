
import ArrowUp from "../../../assets/outline/ArrowUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowUp} data-testid="ArrowUpIcon" className={classes} />
  );
}
