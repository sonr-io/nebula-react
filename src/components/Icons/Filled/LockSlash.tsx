
import LockSlash from "../../../assets/filled/LockSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LockSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LockSlash data-testid="LockSlashIcon" className={classes} />
  );
}
