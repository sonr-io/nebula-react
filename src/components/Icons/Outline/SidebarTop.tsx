
import SidebarTop from "../../../assets/outline/SidebarTop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SidebarTopIcon({ className, dataTestid = "SidebarTopIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SidebarTop data-testid={dataTestid} className={classes} {...rest} />
  );
}
