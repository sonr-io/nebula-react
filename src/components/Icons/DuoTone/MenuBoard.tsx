
import MenuBoard from "../../../assets/duotone/MenuBoard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MenuBoardIcon({ className, dataTestid = "MenuBoardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MenuBoard data-testid={dataTestid} className={classes} {...rest} />
  );
}
