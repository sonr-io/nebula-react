
import Bitcoin from "../../../assets/duotone/Bitcoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BitcoinIcon({ className, dataTestid = "BitcoinIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bitcoin data-testid={dataTestid} className={classes} {...rest} />
  );
}
