
import Clipboard from "../../../assets/outline/Clipboard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Clipboard data-testid="ClipboardIcon" className={classes} />
  );
}
