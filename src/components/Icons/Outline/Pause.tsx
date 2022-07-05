
import Pause from "../../../assets/outline/Pause.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PauseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Pause data-testid="PauseIcon" className={classes} />
  );
}
