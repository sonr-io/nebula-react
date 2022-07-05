
import DirectInbox from "../../../assets/duotone/DirectInbox.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DirectInboxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectInbox data-testid="DirectInboxIcon" className={classes} />
  );
}
