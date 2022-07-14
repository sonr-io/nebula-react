
import SecurityUser from "../../../assets/filled/SecurityUser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecurityUserIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SecurityUser} data-testid="SecurityUserIcon" className={classes} />
  );
}
