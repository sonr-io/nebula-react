
import Paperclip from "../../../assets/outline/Paperclip.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PaperclipIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Paperclip data-testid="PaperclipIcon" className={classes} />
  );
}
