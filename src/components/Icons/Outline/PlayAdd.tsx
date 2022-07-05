
import PlayAdd from "../../../assets/outline/PlayAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PlayAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PlayAdd data-testid="PlayAddIcon" className={classes} />
  );
}
