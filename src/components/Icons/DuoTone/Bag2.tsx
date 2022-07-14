
import Bag2 from "../../../assets/duotone/Bag2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Bag2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Bag2} data-testid="Bag2Icon" className={classes} />
  );
}
