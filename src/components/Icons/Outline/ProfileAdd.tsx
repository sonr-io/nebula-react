
import ProfileAdd from "../../../assets/outline/ProfileAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ProfileAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProfileAdd data-testid="ProfileAddIcon" className={classes} />
  );
}
