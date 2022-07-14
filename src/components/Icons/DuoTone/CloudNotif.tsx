
import CloudNotif from "../../../assets/duotone/CloudNotif.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudNotifIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CloudNotif} data-testid="CloudNotifIcon" className={classes} />
  );
}
