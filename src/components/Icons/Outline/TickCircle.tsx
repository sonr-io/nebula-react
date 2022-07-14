
import TickCircle from "../../../assets/outline/TickCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TickCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TickCircle data-testid="TickCircleIcon" className={classes} />
  );
}
