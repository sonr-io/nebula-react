
import Stacks from "../../../assets/outline/Stacks.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StacksIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Stacks data-testid="StacksIcon" className={classes} />
  );
}
