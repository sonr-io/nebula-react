
import Dislike from "../../../assets/outline/Dislike.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DislikeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Dislike} data-testid="DislikeIcon" className={classes} />
  );
}
