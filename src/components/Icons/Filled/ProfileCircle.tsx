
import ProfileCircle from "../../../assets/filled/ProfileCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProfileCircle data-testid="ProfileCircleIcon" className={classes} />
  );
}
