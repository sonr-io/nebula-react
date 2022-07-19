
import Driver2 from "../../../assets/filled/Driver2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Driver2Icon({ className, dataTestid = "Driver2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Driver2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
