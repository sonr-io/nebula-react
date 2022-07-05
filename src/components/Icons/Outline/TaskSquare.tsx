
import TaskSquare from "../../../assets/outline/TaskSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TaskSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TaskSquare data-testid="TaskSquareIcon" className={classes} />
  );
}
