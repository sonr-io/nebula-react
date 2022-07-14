
import SidebarTop from "../../../assets/duotone/SidebarTop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SidebarTopIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SidebarTop} data-testid="SidebarTopIcon" className={classes} />
  );
}
