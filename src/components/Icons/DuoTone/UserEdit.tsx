
import UserEdit from "../../../assets/duotone/UserEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserEditIcon({ className, dataTestid = "UserEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
