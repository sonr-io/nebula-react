
import Calendar2 from "../../../assets/filled/Calendar2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Calendar2Icon({ className, dataTestid = "Calendar2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Calendar2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
