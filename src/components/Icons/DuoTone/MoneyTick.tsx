
import MoneyTick from "../../../assets/duotone/MoneyTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoneyTick data-testid="MoneyTickIcon" className={classes} />
  );
}
