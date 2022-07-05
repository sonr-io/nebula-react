
import Calendar2 from "../../../assets/filled/Calendar2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Calendar2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Calendar2 data-testid="Calendar2Icon" className={classes} />
  );
}
