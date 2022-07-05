
import BagTick2 from "../../../assets/filled/BagTick2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BagTick2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BagTick2 data-testid="BagTick2Icon" className={classes} />
  );
}
