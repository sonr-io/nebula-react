
import Reply from "../../../assets/filled/Reply.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReplyIcon({ className, dataTestid = "ReplyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Reply data-testid={dataTestid} className={classes} {...rest} />
  );
}
