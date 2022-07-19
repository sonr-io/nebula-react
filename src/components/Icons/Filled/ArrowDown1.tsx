
import ArrowDown1 from "../../../assets/filled/ArrowDown1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowDown1Icon({ className, dataTestid = "ArrowDown1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowDown1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
