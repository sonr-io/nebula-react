
import Like from "../../../assets/filled/Like.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LikeIcon({ className, dataTestid = "LikeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Like data-testid={dataTestid} className={classes} {...rest} />
  );
}
