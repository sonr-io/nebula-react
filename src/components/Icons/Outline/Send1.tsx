
import Send1 from "../../../assets/outline/Send1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Send1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Send1 data-testid="Send1Icon" className={classes} />
  );
}
