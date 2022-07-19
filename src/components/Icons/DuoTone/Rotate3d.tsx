
import Rotate3d from "../../../assets/duotone/Rotate3d.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Rotate3dIcon({ className, dataTestid = "Rotate3dIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Rotate3d data-testid={dataTestid} className={classes} {...rest} />
  );
}
