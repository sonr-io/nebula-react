
import DirectInbox from "../../../assets/duotone/DirectInbox.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectInboxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DirectInbox} data-testid="DirectInboxIcon" className={classes} />
  );
}
