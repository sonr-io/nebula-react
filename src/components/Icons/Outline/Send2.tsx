
import Send2 from "../../../assets/outline/Send2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Send2Icon({ className, dataTestid = "Send2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Send2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
