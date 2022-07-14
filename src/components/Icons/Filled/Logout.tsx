
import Logout from "../../../assets/filled/Logout.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LogoutIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Logout data-testid="LogoutIcon" className={classes} />
  );
}
