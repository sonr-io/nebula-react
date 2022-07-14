
import ClipboardClose from "../../../assets/filled/ClipboardClose.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardCloseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ClipboardClose data-testid="ClipboardCloseIcon" className={classes} />
  );
}
