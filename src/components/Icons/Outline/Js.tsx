
import Js from "../../../assets/outline/Js.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function JsIcon({ className, dataTestid = "JsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Js data-testid={dataTestid} className={classes} {...rest} />
  );
}
