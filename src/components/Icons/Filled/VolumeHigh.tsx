
import VolumeHigh from "../../../assets/filled/VolumeHigh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeHighIcon({ className, dataTestid = "VolumeHighIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VolumeHigh data-testid={dataTestid} className={classes} {...rest} />
  );
}
