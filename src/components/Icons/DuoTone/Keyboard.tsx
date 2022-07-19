
import Keyboard from "../../../assets/duotone/Keyboard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeyboardIcon({ className, dataTestid = "KeyboardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Keyboard data-testid={dataTestid} className={classes} {...rest} />
  );
}
