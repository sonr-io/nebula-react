
import Profile2user from "../../../assets/duotone/Profile2user.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Profile2userIcon({ className, dataTestid = "Profile2userIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Profile2user data-testid={dataTestid} className={classes} {...rest} />
  );
}
