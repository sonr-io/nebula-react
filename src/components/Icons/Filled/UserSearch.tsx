
import UserSearch from "../../../assets/filled/UserSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserSearchIcon({ className, dataTestid = "UserSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
