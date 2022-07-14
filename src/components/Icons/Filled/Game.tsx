
import Game from "../../../assets/filled/Game.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GameIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Game data-testid="GameIcon" className={classes} />
  );
}
