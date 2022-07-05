
import MoneyChange from "../../../assets/outline/MoneyChange.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoneyChangeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoneyChange data-testid="MoneyChangeIcon" className={classes} />
  );
}
