
import Milk from "../../../assets/filled/Milk.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MilkIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Milk} data-testid="MilkIcon" className={classes} />
  );
}
