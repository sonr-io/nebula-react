
import DocumentSketch from "../../../assets/duotone/DocumentSketch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentSketchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentSketch data-testid="DocumentSketchIcon" className={classes} />
  );
}
