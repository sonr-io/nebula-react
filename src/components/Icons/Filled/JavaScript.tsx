
import JavaScript from "../../../assets/filled/JavaScript.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function JavaScriptIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <JavaScript data-testid="JavaScriptIcon" className={classes} />
  );
}
