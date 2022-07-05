
import Bank from "../../../assets/duotone/Bank.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BankIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bank data-testid="BankIcon" className={classes} />
  );
}
