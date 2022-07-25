
import UserAdd from "../../../assets/filled/UserAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserAddIcon({ className, dataTestid = "UserAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
