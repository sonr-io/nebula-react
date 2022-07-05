
import Keyboard from "../../../assets/filled/Keyboard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function KeyboardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Keyboard data-testid="KeyboardIcon" className={classes} />
  );
}
