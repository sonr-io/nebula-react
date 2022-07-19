
import ProfileRemove from "../../../assets/filled/ProfileRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileRemoveIcon({ className, dataTestid = "ProfileRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ProfileRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
