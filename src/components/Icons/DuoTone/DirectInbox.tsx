
import DirectInbox from "../../../assets/duotone/DirectInbox.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectInboxIcon({ className, dataTestid = "DirectInboxIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectInbox data-testid={dataTestid} className={classes} {...rest} />
  );
}
