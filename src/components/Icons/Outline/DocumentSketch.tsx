
import DocumentSketch from "../../../assets/outline/DocumentSketch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentSketchIcon({ className, dataTestid = "DocumentSketchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentSketch data-testid={dataTestid} className={classes} {...rest} />
  );
}
