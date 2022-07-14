
import Eraser from "../../../assets/duotone/Eraser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EraserIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Eraser data-testid="EraserIcon" className={classes} />
  );
}
