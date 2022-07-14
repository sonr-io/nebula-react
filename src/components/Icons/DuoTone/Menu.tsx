
import Menu from "../../../assets/duotone/Menu.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MenuIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Menu} data-testid="MenuIcon" className={classes} />
  );
}
