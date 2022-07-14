
import Solana from "../../../assets/duotone/Solana.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SolanaIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Solana} data-testid="SolanaIcon" className={classes} />
  );
}
