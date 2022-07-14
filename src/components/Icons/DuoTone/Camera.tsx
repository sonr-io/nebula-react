
import Camera from "../../../assets/duotone/Camera.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CameraIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Camera data-testid="CameraIcon" className={classes} />
  );
}
