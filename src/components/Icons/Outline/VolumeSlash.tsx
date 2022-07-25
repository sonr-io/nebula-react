
import VolumeSlash from "../../../assets/outline/VolumeSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeSlashIcon({ className, dataTestid = "VolumeSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VolumeSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
