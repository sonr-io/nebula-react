
import ProfileCircle from "../../../assets/duotone/ProfileCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileCircleIcon({ className, dataTestid = "ProfileCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ProfileCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
