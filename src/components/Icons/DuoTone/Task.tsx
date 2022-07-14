
import Task from "../../../assets/duotone/Task.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TaskIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Task} data-testid="TaskIcon" className={classes} />
  );
}
