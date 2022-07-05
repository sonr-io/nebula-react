
import Ruler from "../../../assets/outline/Ruler.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RulerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ruler data-testid="RulerIcon" className={classes} />
  );
}
