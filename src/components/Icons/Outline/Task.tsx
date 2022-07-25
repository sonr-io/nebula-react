
import Task from "../../../assets/outline/Task.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TaskIcon({ className, dataTestid = "TaskIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Task data-testid={dataTestid} className={classes} {...rest} />
  );
}
