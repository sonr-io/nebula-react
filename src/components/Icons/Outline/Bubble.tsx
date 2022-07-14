
import Bubble from "../../../assets/outline/Bubble.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BubbleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Bubble} data-testid="BubbleIcon" className={classes} />
  );
}
