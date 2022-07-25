
import SidebarLeft from "../../../assets/filled/SidebarLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SidebarLeftIcon({ className, dataTestid = "SidebarLeftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SidebarLeft data-testid={dataTestid} className={classes} {...rest} />
  );
}
