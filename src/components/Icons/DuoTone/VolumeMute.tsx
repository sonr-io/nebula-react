
import VolumeMute from "../../../assets/duotone/VolumeMute.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeMuteIcon({ className, dataTestid = "VolumeMuteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VolumeMute data-testid={dataTestid} className={classes} {...rest} />
  );
}
