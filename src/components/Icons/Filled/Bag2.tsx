
import Bag2 from "../../../assets/filled/Bag2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Bag2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bag2 data-testid="Bag2Icon" className={classes} />
  );
}
