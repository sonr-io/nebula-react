
import TaskSquare from "../../../assets/outline/TaskSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TaskSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TaskSquare} data-testid="TaskSquareIcon" className={classes} />
  );
}
