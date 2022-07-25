
import Gameboy from "../../../assets/duotone/Gameboy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GameboyIcon({ className, dataTestid = "GameboyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Gameboy data-testid={dataTestid} className={classes} {...rest} />
  );
}
