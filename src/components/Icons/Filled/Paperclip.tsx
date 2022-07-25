
import Paperclip from "../../../assets/filled/Paperclip.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PaperclipIcon({ className, dataTestid = "PaperclipIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Paperclip data-testid={dataTestid} className={classes} {...rest} />
  );
}
