
import ClipboardClose from "../../../assets/duotone/ClipboardClose.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ClipboardCloseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ClipboardClose data-testid="ClipboardCloseIcon" className={classes} />
  );
}
