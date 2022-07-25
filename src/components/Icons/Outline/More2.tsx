
import More2 from "../../../assets/outline/More2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function More2Icon({ className, dataTestid = "More2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <More2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
