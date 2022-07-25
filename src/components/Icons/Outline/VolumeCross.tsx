
import VolumeCross from "../../../assets/outline/VolumeCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeCrossIcon({ className, dataTestid = "VolumeCrossIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VolumeCross data-testid={dataTestid} className={classes} {...rest} />
  );
}
