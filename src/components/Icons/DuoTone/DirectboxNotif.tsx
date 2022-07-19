
import DirectboxNotif from "../../../assets/duotone/DirectboxNotif.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectboxNotifIcon({ className, dataTestid = "DirectboxNotifIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectboxNotif data-testid={dataTestid} className={classes} {...rest} />
  );
}
