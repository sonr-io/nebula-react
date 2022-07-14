
import MoneyRemove from "../../../assets/duotone/MoneyRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoneyRemove data-testid="MoneyRemoveIcon" className={classes} />
  );
}
