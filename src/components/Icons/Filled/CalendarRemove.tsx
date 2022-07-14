
import CalendarRemove from "../../../assets/filled/CalendarRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalendarRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CalendarRemove} data-testid="CalendarRemoveIcon" className={classes} />
  );
}
