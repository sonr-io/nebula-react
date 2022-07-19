
import ProfileDelete from "../../../assets/filled/ProfileDelete.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProfileDeleteIcon({ className, dataTestid = "ProfileDeleteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ProfileDelete data-testid={dataTestid} className={classes} {...rest} />
  );
}
