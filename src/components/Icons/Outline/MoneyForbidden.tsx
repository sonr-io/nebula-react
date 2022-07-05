
import MoneyForbidden from "../../../assets/outline/MoneyForbidden.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoneyForbiddenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MoneyForbidden data-testid="MoneyForbiddenIcon" className={classes} />
  );
}
