
import Profile from "../../../assets/duotone/Profile.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ProfileIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Profile data-testid="ProfileIcon" className={classes} />
  );
}
