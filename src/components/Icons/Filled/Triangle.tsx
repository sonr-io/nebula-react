
import Triangle from "../../../assets/filled/Triangle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TriangleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Triangle data-testid="TriangleIcon" className={classes} />
  );
}
