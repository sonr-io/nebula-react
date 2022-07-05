
import ProfileCircle from "../../../assets/outline/ProfileCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ProfileCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProfileCircle data-testid="ProfileCircleIcon" className={classes} />
  );
}
