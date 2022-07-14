
import Call from "../../../assets/filled/Call.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Call data-testid="CallIcon" className={classes} />
  );
}
