
import LikeDislike from "../../../assets/duotone/LikeDislike.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LikeDislikeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LikeDislike data-testid="LikeDislikeIcon" className={classes} />
  );
}
