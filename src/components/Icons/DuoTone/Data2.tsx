
import Data2 from "../../../assets/duotone/Data2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Data2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Data2 data-testid="Data2Icon" className={classes} />
  );
}
