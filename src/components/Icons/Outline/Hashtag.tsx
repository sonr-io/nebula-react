
import Hashtag from "../../../assets/outline/Hashtag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HashtagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Hashtag data-testid="HashtagIcon" className={classes} />
  );
}
