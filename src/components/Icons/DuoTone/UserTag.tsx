
import UserTag from "../../../assets/duotone/UserTag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserTagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserTag data-testid="UserTagIcon" className={classes} />
  );
}
