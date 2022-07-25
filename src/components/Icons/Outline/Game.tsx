
import Game from "../../../assets/outline/Game.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GameIcon({ className, dataTestid = "GameIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Game data-testid={dataTestid} className={classes} {...rest} />
  );
}
