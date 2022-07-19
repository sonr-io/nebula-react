
import ProfileAdd from "../../../assets/outline/ProfileAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileAddIcon({ className, dataTestid = "ProfileAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ProfileAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
