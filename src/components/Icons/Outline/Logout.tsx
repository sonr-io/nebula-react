
import Logout from "../../../assets/outline/Logout.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LogoutIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Logout data-testid="LogoutIcon" className={classes} />
  );
}
