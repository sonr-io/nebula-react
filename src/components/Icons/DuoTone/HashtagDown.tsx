
import HashtagDown from "../../../assets/duotone/HashtagDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HashtagDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HashtagDown data-testid="HashtagDownIcon" className={classes} />
  );
}
