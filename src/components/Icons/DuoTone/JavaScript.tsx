
import JavaScript from "../../../assets/duotone/JavaScript.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function JavaScriptIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={JavaScript} data-testid="JavaScriptIcon" className={classes} />
  );
}
