
import SidebarRight from "../../../assets/outline/SidebarRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SidebarRightIcon({ className, dataTestid = "SidebarRightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SidebarRight data-testid={dataTestid} className={classes} {...rest} />
  );
}
