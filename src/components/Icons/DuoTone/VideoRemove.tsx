
import VideoRemove from "../../../assets/duotone/VideoRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VideoRemove} data-testid="VideoRemoveIcon" className={classes} />
  );
}
