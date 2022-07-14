
import LikeShapes from "../../../assets/filled/LikeShapes.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LikeShapesIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={LikeShapes} data-testid="LikeShapesIcon" className={classes} />
  );
}
