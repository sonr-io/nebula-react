
import ArrowDown2 from "../../../assets/filled/ArrowDown2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowDown2Icon({ className, dataTestid = "ArrowDown2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowDown2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
