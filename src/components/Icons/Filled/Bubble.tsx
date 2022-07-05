
import Bubble from "../../../assets/filled/Bubble.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BubbleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bubble data-testid="BubbleIcon" className={classes} />
  );
}
