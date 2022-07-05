
import Gameboy from "../../../assets/outline/Gameboy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GameboyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Gameboy data-testid="GameboyIcon" className={classes} />
  );
}
