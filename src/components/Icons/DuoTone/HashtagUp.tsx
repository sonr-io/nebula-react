
import HashtagUp from "../../../assets/duotone/HashtagUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HashtagUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={HashtagUp} data-testid="HashtagUpIcon" className={classes} />
  );
}
