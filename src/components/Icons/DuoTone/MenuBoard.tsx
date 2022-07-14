
import MenuBoard from "../../../assets/duotone/MenuBoard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MenuBoardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MenuBoard data-testid="MenuBoardIcon" className={classes} />
  );
}