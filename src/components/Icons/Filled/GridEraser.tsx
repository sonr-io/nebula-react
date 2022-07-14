
import GridEraser from "../../../assets/filled/GridEraser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GridEraserIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GridEraser} data-testid="GridEraserIcon" className={classes} />
  );
}
