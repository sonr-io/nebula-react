
import HamburgerMenu from "../../../assets/duotone/HamburgerMenu.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HamburgerMenuIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HamburgerMenu data-testid="HamburgerMenuIcon" className={classes} />
  );
}
