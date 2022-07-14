
import MoneyForbidden from "../../../assets/filled/MoneyForbidden.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneyForbiddenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MoneyForbidden} data-testid="MoneyForbiddenIcon" className={classes} />
  );
}
