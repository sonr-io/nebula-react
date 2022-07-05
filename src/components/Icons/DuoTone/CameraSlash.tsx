
import CameraSlash from "../../../assets/duotone/CameraSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CameraSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CameraSlash data-testid="CameraSlashIcon" className={classes} />
  );
}
