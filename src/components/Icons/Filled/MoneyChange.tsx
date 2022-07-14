
import MoneyChange from "../../../assets/filled/MoneyChange.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyChangeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MoneyChange} data-testid="MoneyChangeIcon" className={classes} />
  );
}
