
import SidebarTop from "../../../assets/duotone/SidebarTop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SidebarTopIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SidebarTop data-testid="SidebarTopIcon" className={classes} />
  );
}
