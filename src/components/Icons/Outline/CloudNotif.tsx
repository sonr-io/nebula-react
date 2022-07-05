
import CloudNotif from "../../../assets/outline/CloudNotif.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CloudNotifIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudNotif data-testid="CloudNotifIcon" className={classes} />
  );
}
