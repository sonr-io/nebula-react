
import RefreshSquare2 from "../../../assets/outline/RefreshSquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RefreshSquare2Icon({ className, dataTestid = "RefreshSquare2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RefreshSquare2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
