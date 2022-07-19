
import VolumeUp from "../../../assets/filled/VolumeUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeUpIcon({ className, dataTestid = "VolumeUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VolumeUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
