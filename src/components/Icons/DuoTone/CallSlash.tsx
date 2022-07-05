
import CallSlash from "../../../assets/duotone/CallSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CallSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CallSlash data-testid="CallSlashIcon" className={classes} />
  );
}
