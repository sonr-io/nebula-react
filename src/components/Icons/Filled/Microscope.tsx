
import Microscope from "../../../assets/filled/Microscope.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MicroscopeIcon({ className, dataTestid = "MicroscopeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Microscope data-testid={dataTestid} className={classes} {...rest} />
  );
}
