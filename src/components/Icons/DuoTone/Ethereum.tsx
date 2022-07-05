
import Ethereum from "../../../assets/duotone/Ethereum.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EthereumIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ethereum data-testid="EthereumIcon" className={classes} />
  );
}
