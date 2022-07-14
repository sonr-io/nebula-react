
import SidebarRight from "../../../assets/duotone/SidebarRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SidebarRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SidebarRight data-testid="SidebarRightIcon" className={classes} />
  );
}
