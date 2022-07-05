
import UserSquare from "../../../assets/filled/UserSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function UserSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <UserSquare data-testid="UserSquareIcon" className={classes} />
  );
}
