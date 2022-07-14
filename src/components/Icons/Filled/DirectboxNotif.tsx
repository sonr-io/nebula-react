
import DirectboxNotif from "../../../assets/filled/DirectboxNotif.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectboxNotifIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectboxNotif} data-testid="DirectboxNotifIcon" className={classes} />
  );
}
