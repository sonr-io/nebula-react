
import SidebarBottom from "../../../assets/filled/SidebarBottom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SidebarBottomIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SidebarBottom data-testid="SidebarBottomIcon" className={classes} />
  );
}
