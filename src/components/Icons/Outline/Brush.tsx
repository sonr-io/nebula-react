
import Brush from "../../../assets/outline/Brush.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrushIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Brush data-testid="BrushIcon" className={classes} />
  );
}