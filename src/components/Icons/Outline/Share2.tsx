
import Share2 from "../../../assets/outline/Share2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Share2Icon({ className, dataTestid = "Share2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Share2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
