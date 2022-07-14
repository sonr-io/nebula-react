
import MoneyTime from "../../../assets/filled/MoneyTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoneyTime data-testid="MoneyTimeIcon" className={classes} />
  );
}
