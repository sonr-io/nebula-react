
import Square3d from "../../../assets/filled/Square3d.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Square3dIcon({ className, dataTestid = "Square3dIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Square3d data-testid={dataTestid} className={classes} {...rest} />
  );
}
