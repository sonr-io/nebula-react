
import JavaScript from "../../../assets/outline/JavaScript.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function JavaScriptIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <JavaScript data-testid="JavaScriptIcon" className={classes} />
  );
}
