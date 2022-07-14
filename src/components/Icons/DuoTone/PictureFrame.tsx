
import PictureFrame from "../../../assets/duotone/PictureFrame.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PictureFrameIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PictureFrame} data-testid="PictureFrameIcon" className={classes} />
  );
}
