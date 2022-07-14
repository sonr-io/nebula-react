
import PlayRemove from "../../../assets/outline/PlayRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PlayRemove data-testid="PlayRemoveIcon" className={classes} />
  );
}