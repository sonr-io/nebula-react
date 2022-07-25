
import Wallet2 from "../../../assets/filled/Wallet2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Wallet2Icon({ className, dataTestid = "Wallet2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wallet2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
