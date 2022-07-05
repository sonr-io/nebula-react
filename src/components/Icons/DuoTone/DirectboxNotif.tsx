
import DirectboxNotif from "../../../assets/duotone/DirectboxNotif.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DirectboxNotifIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectboxNotif data-testid="DirectboxNotifIcon" className={classes} />
  );
}
