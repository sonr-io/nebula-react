
import Triangle from "../../../assets/outline/Triangle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TriangleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Triangle} data-testid="TriangleIcon" className={classes} />
  );
}
