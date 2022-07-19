
import TaskSquare from "../../../assets/outline/TaskSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TaskSquareIcon({ className, dataTestid = "TaskSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TaskSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
