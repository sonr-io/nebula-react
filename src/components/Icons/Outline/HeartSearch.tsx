
import HeartSearch from "../../../assets/outline/HeartSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartSearch data-testid="HeartSearchIcon" className={classes} />
  );
}
