
import Ghost from "../../../assets/outline/Ghost.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GhostIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ghost data-testid="GhostIcon" className={classes} />
  );
}
