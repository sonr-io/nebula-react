
import UserTick from "../../../assets/duotone/UserTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function UserTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserTick data-testid="UserTickIcon" className={classes} />
  );
}
