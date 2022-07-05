
import ClipboardText from "../../../assets/outline/ClipboardText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ClipboardTextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ClipboardText data-testid="ClipboardTextIcon" className={classes} />
  );
}
