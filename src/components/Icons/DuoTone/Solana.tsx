
import Solana from "../../../assets/duotone/Solana.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SolanaIcon({ className, dataTestid = "SolanaIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Solana data-testid={dataTestid} className={classes} {...rest} />
  );
}
