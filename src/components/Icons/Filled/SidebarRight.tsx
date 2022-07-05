
import SidebarRight from "../../../assets/filled/SidebarRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SidebarRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SidebarRight data-testid="SidebarRightIcon" className={classes} />
  );
}
