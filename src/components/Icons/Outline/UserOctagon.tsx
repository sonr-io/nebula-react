
import UserOctagon from "../../../assets/outline/UserOctagon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserOctagonIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserOctagon data-testid="UserOctagonIcon" className={classes} />
  );
}
