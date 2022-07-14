
import UserMinus from "../../../assets/outline/UserMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserMinus data-testid="UserMinusIcon" className={classes} />
  );
}
