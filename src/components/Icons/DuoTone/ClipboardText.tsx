
import ClipboardText from "../../../assets/duotone/ClipboardText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardTextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ClipboardText data-testid="ClipboardTextIcon" className={classes} />
  );
}
