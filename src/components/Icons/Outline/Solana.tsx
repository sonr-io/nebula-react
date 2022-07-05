
import Solana from "../../../assets/outline/Solana.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SolanaIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Solana data-testid="SolanaIcon" className={classes} />
  );
}
