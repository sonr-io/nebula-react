
import Shapes from "../../../assets/filled/Shapes.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShapesIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Shapes data-testid="ShapesIcon" className={classes} />
  );
}
