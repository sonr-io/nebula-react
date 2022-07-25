
import LikeShapes from "../../../assets/filled/LikeShapes.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LikeShapesIcon({ className, dataTestid = "LikeShapesIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LikeShapes data-testid={dataTestid} className={classes} {...rest} />
  );
}
