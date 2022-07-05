
import Thorchain from "../../../assets/outline/Thorchain.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ThorchainIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Thorchain data-testid="ThorchainIcon" className={classes} />
  );
}
