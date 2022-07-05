
import HashtagUp from "../../../assets/outline/HashtagUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HashtagUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HashtagUp data-testid="HashtagUpIcon" className={classes} />
  );
}
