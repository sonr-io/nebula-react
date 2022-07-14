
import Paperclip from "../../../assets/outline/Paperclip.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PaperclipIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Paperclip} data-testid="PaperclipIcon" className={classes} />
  );
}
