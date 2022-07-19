
import ProfileTick from "../../../assets/filled/ProfileTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileTickIcon({ className, dataTestid = "ProfileTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ProfileTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
