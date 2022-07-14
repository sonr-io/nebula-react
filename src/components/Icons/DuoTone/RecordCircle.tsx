
import RecordCircle from "../../../assets/duotone/RecordCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RecordCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RecordCircle} data-testid="RecordCircleIcon" className={classes} />
  );
}
