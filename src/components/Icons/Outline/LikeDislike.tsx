
import LikeDislike from "../../../assets/outline/LikeDislike.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LikeDislikeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={LikeDislike} data-testid="LikeDislikeIcon" className={classes} />
  );
}
