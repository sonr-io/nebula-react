
import VolumeLow from "../../../assets/filled/VolumeLow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeLowIcon({ className, dataTestid = "VolumeLowIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VolumeLow data-testid={dataTestid} className={classes} {...rest} />
  );
}
