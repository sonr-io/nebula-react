
import VolumeLow1 from "../../../assets/filled/VolumeLow1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeLow1Icon({ className, dataTestid = "VolumeLow1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VolumeLow1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
