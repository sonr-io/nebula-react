
import HashtagDown from "../../../assets/outline/HashtagDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HashtagDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HashtagDown data-testid="HashtagDownIcon" className={classes} />
  );
}