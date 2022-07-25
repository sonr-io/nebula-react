
import Menu from "../../../assets/outline/Menu.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MenuIcon({ className, dataTestid = "MenuIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Menu data-testid={dataTestid} className={classes} {...rest} />
  );
}
