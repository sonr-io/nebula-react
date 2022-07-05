
import Shuffle from "../../../assets/duotone/Shuffle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShuffleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Shuffle data-testid="ShuffleIcon" className={classes} />
  );
}
