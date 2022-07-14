
import UserTag from "../../../assets/filled/UserTag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UserTagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={UserTag} data-testid="UserTagIcon" className={classes} />
  );
}
