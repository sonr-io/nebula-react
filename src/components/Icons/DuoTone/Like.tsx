
import Like from "../../../assets/duotone/Like.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LikeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Like data-testid="LikeIcon" className={classes} />
  );
}
