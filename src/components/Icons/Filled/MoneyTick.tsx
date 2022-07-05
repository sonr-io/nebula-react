
import MoneyTick from "../../../assets/filled/MoneyTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoneyTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoneyTick data-testid="MoneyTickIcon" className={classes} />
  );
}
