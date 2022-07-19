
import Profile from "../../../assets/outline/Profile.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileIcon({ className, dataTestid = "ProfileIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Profile data-testid={dataTestid} className={classes} {...rest} />
  );
}
