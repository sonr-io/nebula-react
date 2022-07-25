
import HamburgerMenu from "../../../assets/duotone/HamburgerMenu.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HamburgerMenuIcon({ className, dataTestid = "HamburgerMenuIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HamburgerMenu data-testid={dataTestid} className={classes} {...rest} />
  );
}
