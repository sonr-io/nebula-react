
import JavaScript from "../../../assets/duotone/JavaScript.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function JavaScriptIcon({ className, dataTestid = "JavaScriptIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <JavaScript data-testid={dataTestid} className={classes} {...rest} />
  );
}
