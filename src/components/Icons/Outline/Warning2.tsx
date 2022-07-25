
import Warning2 from "../../../assets/outline/Warning2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Warning2Icon({ className, dataTestid = "Warning2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Warning2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
