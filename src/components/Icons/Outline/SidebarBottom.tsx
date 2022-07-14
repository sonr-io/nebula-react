
import SidebarBottom from "../../../assets/outline/SidebarBottom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SidebarBottomIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SidebarBottom data-testid="SidebarBottomIcon" className={classes} />
  );
}
