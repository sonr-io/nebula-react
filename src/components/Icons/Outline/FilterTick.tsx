
import FilterTick from "../../../assets/outline/FilterTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FilterTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FilterTick} data-testid="FilterTickIcon" className={classes} />
  );
}
