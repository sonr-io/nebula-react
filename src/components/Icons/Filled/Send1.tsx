
import Send1 from "../../../assets/filled/Send1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Send1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Send1 data-testid="Send1Icon" className={classes} />
  );
}
