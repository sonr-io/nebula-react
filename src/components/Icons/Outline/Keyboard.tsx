
import Keyboard from "../../../assets/outline/Keyboard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeyboardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Keyboard} data-testid="KeyboardIcon" className={classes} />
  );
}
