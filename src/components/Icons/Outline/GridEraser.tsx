
import GridEraser from "../../../assets/outline/GridEraser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GridEraserIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GridEraser data-testid="GridEraserIcon" className={classes} />
  );
}
