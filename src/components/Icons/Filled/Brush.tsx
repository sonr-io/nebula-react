
import Brush from "../../../assets/filled/Brush.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrushIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Brush} data-testid="BrushIcon" className={classes} />
  );
}
