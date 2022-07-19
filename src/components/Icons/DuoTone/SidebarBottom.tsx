
import SidebarBottom from "../../../assets/duotone/SidebarBottom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SidebarBottomIcon({ className, dataTestid = "SidebarBottomIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SidebarBottom data-testid={dataTestid} className={classes} {...rest} />
  );
}
