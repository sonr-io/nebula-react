
import MoneyForbidden from "../../../assets/outline/MoneyForbidden.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyForbiddenIcon({ className, dataTestid = "MoneyForbiddenIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoneyForbidden data-testid={dataTestid} className={classes} {...rest} />
  );
}
