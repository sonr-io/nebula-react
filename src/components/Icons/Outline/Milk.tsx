
import Milk from "../../../assets/outline/Milk.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MilkIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Milk data-testid="MilkIcon" className={classes} />
  );
}