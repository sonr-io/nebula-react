
import UserCirlceAdd from "../../../assets/duotone/UserCirlceAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserCirlceAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserCirlceAdd data-testid="UserCirlceAddIcon" className={classes} />
  );
}
