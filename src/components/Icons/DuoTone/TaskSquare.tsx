
import TaskSquare from "../../../assets/duotone/TaskSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TaskSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TaskSquare data-testid="TaskSquareIcon" className={classes} />
  );
}
