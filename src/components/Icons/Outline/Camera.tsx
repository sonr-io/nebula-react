
import Camera from "../../../assets/outline/Camera.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CameraIcon({ className, dataTestid = "CameraIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Camera data-testid={dataTestid} className={classes} {...rest} />
  );
}
