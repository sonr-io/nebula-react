
import UserSquare from "../../../assets/filled/UserSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={UserSquare} data-testid="UserSquareIcon" className={classes} />
  );
}
