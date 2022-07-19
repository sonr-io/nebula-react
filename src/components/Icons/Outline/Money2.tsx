
import Money2 from "../../../assets/outline/Money2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Money2Icon({ className, dataTestid = "Money2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Money2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
