
import CameraSlash from "../../../assets/duotone/CameraSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CameraSlashIcon({ className, dataTestid = "CameraSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CameraSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
