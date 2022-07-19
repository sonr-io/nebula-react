
import Reply from "../../../assets/filled/Reply.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReplyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Reply data-testid="ReplyIcon" className={classes} />
  );
}
