
import DocumentSketch from "../../../assets/outline/DocumentSketch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentSketchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DocumentSketch} data-testid="DocumentSketchIcon" className={classes} />
  );
}
