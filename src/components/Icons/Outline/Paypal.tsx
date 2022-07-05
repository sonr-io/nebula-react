
import Paypal from "../../../assets/outline/Paypal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PaypalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Paypal data-testid="PaypalIcon" className={classes} />
  );
}
