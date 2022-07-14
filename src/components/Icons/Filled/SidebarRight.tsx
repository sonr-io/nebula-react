
import SidebarRight from "../../../assets/filled/SidebarRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SidebarRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SidebarRight} data-testid="SidebarRightIcon" className={classes} />
  );
}
