
import RefreshSquare2 from "../../../assets/filled/RefreshSquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RefreshSquare2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <RefreshSquare2 data-testid="RefreshSquare2Icon" className={classes} />
  );
}
