
import LikeShapes from "../../../assets/duotone/LikeShapes.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LikeShapesIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LikeShapes data-testid="LikeShapesIcon" className={classes} />
  );
}
