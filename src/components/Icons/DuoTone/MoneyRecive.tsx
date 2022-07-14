
import MoneyRecive from "../../../assets/duotone/MoneyRecive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyReciveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MoneyRecive} data-testid="MoneyReciveIcon" className={classes} />
  );
}
