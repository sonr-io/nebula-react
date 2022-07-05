
import Bezier from "../../../assets/duotone/Bezier.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BezierIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bezier data-testid="BezierIcon" className={classes} />
  );
}
