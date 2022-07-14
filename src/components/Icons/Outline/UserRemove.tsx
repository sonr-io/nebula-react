
import UserRemove from "../../../assets/outline/UserRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={UserRemove} data-testid="UserRemoveIcon" className={classes} />
  );
}
