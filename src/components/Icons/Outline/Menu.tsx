
import Menu from "../../../assets/outline/Menu.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MenuIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Menu data-testid="MenuIcon" className={classes} />
  );
}
