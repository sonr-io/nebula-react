
import Wallet3 from "../../../assets/filled/Wallet3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Wallet3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Wallet3 data-testid="Wallet3Icon" className={classes} />
  );
}
