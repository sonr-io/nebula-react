
import Activity from "../../../assets/outline/Activity.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ActivityIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Activity data-testid="ActivityIcon" className={classes} />
  );
}
