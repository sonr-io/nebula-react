
import Weight1 from "../../../assets/filled/Weight1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Weight1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Weight1 data-testid="Weight1Icon" className={classes} />
  );
}
