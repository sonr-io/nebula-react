
import CameraSlash from "../../../assets/outline/CameraSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CameraSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CameraSlash data-testid="CameraSlashIcon" className={classes} />
  );
}
