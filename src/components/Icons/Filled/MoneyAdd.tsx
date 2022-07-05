
import MoneyAdd from "../../../assets/filled/MoneyAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoneyAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoneyAdd data-testid="MoneyAddIcon" className={classes} />
  );
}
