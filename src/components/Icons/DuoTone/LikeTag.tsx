
import LikeTag from "../../../assets/duotone/LikeTag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LikeTagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LikeTag data-testid="LikeTagIcon" className={classes} />
  );
}
