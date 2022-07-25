
import Cube3d from "../../../assets/filled/Cube3d.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Cube3dIcon({ className, dataTestid = "Cube3dIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Cube3d data-testid={dataTestid} className={classes} {...rest} />
  );
}
