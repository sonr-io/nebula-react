
import MoneyRemove from "../../../assets/duotone/MoneyRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyRemoveIcon({ className, dataTestid = "MoneyRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoneyRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
