
import Redo from "../../../assets/outline/Redo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RedoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Redo data-testid="RedoIcon" className={classes} />
  );
}
