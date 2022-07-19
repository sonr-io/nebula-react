
import CloudNotif from "../../../assets/outline/CloudNotif.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudNotifIcon({ className, dataTestid = "CloudNotifIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudNotif data-testid={dataTestid} className={classes} {...rest} />
  );
}
