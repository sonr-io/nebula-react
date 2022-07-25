
import Kanban from "../../../assets/duotone/Kanban.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KanbanIcon({ className, dataTestid = "KanbanIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Kanban data-testid={dataTestid} className={classes} {...rest} />
  );
}
