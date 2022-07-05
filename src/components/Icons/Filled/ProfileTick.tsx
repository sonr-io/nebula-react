
import ProfileTick from "../../../assets/filled/ProfileTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ProfileTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProfileTick data-testid="ProfileTickIcon" className={classes} />
  );
}
