
import Money from "../../../assets/duotone/Money.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Money} data-testid="MoneyIcon" className={classes} />
  );
}
