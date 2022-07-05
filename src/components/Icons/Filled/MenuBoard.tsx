
import MenuBoard from "../../../assets/filled/MenuBoard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MenuBoardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MenuBoard data-testid="MenuBoardIcon" className={classes} />
  );
}
