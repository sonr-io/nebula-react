
import UserSearch from "../../../assets/duotone/UserSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserSearch data-testid="UserSearchIcon" className={classes} />
  );
}
