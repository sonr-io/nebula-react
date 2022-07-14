
import LikeTag from "../../../assets/duotone/LikeTag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LikeTagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={LikeTag} data-testid="LikeTagIcon" className={classes} />
  );
}
