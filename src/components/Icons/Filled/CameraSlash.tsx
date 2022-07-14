
import CameraSlash from "../../../assets/filled/CameraSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CameraSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CameraSlash} data-testid="CameraSlashIcon" className={classes} />
  );
}
