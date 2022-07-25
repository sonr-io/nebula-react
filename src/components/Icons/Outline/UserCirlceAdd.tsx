
import UserCirlceAdd from "../../../assets/outline/UserCirlceAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserCirlceAddIcon({ className, dataTestid = "UserCirlceAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <UserCirlceAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
