
import Wallet2 from "../../../assets/filled/Wallet2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Wallet2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Wallet2} data-testid="Wallet2Icon" className={classes} />
  );
}
