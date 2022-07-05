
import HeartAdd from "../../../assets/outline/HeartAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HeartAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartAdd data-testid="HeartAddIcon" className={classes} />
  );
}
