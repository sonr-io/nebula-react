
import TrushSquare from "../../../assets/outline/TrushSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrushSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TrushSquare data-testid="TrushSquareIcon" className={classes} />
  );
}
