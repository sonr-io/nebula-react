
import Paypal from "../../../assets/filled/Paypal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PaypalIcon({ className, dataTestid = "PaypalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Paypal data-testid={dataTestid} className={classes} {...rest} />
  );
}
