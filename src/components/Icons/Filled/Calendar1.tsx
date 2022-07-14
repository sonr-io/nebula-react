
import Calendar1 from "../../../assets/filled/Calendar1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Calendar1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Calendar1} data-testid="Calendar1Icon" className={classes} />
  );
}
