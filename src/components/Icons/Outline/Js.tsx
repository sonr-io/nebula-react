
import Js from "../../../assets/outline/Js.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function JsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Js data-testid="JsIcon" className={classes} />
  );
}
