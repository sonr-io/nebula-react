
import Like from "../../../assets/outline/Like.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LikeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Like} data-testid="LikeIcon" className={classes} />
  );
}
