
import Shuffle from "../../../assets/outline/Shuffle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShuffleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Shuffle} data-testid="ShuffleIcon" className={classes} />
  );
}
