
import ArrowLeft2 from "../../../assets/outline/ArrowLeft2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowLeft2Icon({ className, dataTestid = "ArrowLeft2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowLeft2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
