
import BackwardItem from "../../../assets/outline/BackwardItem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BackwardItemIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BackwardItem data-testid="BackwardItemIcon" className={classes} />
  );
}
