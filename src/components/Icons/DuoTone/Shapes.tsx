
import Shapes from "../../../assets/duotone/Shapes.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShapesIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Shapes} data-testid="ShapesIcon" className={classes} />
  );
}
