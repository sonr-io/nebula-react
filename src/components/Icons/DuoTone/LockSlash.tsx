
import LockSlash from "../../../assets/duotone/LockSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LockSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LockSlash data-testid="LockSlashIcon" className={classes} />
  );
}
