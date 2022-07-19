
import CubeScan3d from "../../../assets/duotone/CubeScan3d.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CubeScan3dIcon({ className, dataTestid = "CubeScan3dIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CubeScan3d data-testid={dataTestid} className={classes} {...rest} />
  );
}
