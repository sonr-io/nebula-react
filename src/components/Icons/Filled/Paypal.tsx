
import Paypal from "../../../assets/filled/Paypal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PaypalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Paypal} data-testid="PaypalIcon" className={classes} />
  );
}
