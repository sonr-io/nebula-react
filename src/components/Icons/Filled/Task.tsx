
import Task from "../../../assets/filled/Task.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TaskIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Task data-testid="TaskIcon" className={classes} />
  );
}
