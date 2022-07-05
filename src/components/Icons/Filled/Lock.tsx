
import Lock from "../../../assets/filled/Lock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LockIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Lock data-testid="LockIcon" className={classes} />
  );
}
