
import Kanban from "../../../assets/filled/Kanban.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KanbanIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Kanban} data-testid="KanbanIcon" className={classes} />
  );
}
