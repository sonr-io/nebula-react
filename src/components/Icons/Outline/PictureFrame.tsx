
import PictureFrame from "../../../assets/outline/PictureFrame.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PictureFrameIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PictureFrame data-testid="PictureFrameIcon" className={classes} />
  );
}
