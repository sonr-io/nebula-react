
import ArrowBottom from "../../../assets/outline/ArrowBottom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowBottomIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowBottom data-testid="ArrowBottomIcon" className={classes} />
  );
}
