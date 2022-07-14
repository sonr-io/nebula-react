
import Profile from "../../../assets/duotone/Profile.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Profile} data-testid="ProfileIcon" className={classes} />
  );
}
