
import MoneyRemove from "../../../assets/filled/MoneyRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoneyRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoneyRemove data-testid="MoneyRemoveIcon" className={classes} />
  );
}
