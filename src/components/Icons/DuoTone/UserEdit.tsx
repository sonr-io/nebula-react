
import UserEdit from "../../../assets/duotone/UserEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function UserEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserEdit data-testid="UserEditIcon" className={classes} />
  );
}
