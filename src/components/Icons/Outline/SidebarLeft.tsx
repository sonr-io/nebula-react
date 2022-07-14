
import SidebarLeft from "../../../assets/outline/SidebarLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SidebarLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SidebarLeft} data-testid="SidebarLeftIcon" className={classes} />
  );
}
