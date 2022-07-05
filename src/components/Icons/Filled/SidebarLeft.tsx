
import SidebarLeft from "../../../assets/filled/SidebarLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SidebarLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SidebarLeft data-testid="SidebarLeftIcon" className={classes} />
  );
}
