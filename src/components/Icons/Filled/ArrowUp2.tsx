
import ArrowUp2 from "../../../assets/filled/ArrowUp2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowUp2Icon({ className, dataTestid = "ArrowUp2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowUp2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
