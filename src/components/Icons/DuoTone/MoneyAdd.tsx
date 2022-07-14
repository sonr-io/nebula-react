
import MoneyAdd from "../../../assets/duotone/MoneyAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MoneyAdd} data-testid="MoneyAddIcon" className={classes} />
  );
}
