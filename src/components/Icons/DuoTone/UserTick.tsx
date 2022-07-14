
import UserTick from "../../../assets/duotone/UserTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={UserTick} data-testid="UserTickIcon" className={classes} />
  );
}
