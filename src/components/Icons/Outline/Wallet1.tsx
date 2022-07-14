
import Wallet1 from "../../../assets/outline/Wallet1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Wallet1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Wallet1 data-testid="Wallet1Icon" className={classes} />
  );
}