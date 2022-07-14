
import HeartAdd from "../../../assets/outline/HeartAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HeartAdd} data-testid="HeartAddIcon" className={classes} />
  );
}
