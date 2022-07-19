
import LikeDislike from "../../../assets/outline/LikeDislike.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LikeDislikeIcon({ className, dataTestid = "LikeDislikeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LikeDislike data-testid={dataTestid} className={classes} {...rest} />
  );
}
