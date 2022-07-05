
import Money from "../../../assets/outline/Money.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoneyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Money data-testid="MoneyIcon" className={classes} />
  );
}
