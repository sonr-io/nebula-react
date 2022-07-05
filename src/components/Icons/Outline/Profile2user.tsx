
import Profile2user from "../../../assets/outline/Profile2user.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Profile2userIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Profile2user data-testid="Profile2userIcon" className={classes} />
  );
}
