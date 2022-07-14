
import UserAdd from "../../../assets/filled/UserAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserAdd data-testid="UserAddIcon" className={classes} />
  );
}
