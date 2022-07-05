
import Stickynote from "../../../assets/outline/Stickynote.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function StickynoteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Stickynote data-testid="StickynoteIcon" className={classes} />
  );
}
