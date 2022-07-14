
import Kanban from "../../../assets/outline/Kanban.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KanbanIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Kanban data-testid="KanbanIcon" className={classes} />
  );
}
