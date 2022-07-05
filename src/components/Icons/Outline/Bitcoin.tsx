
import Bitcoin from "../../../assets/outline/Bitcoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BitcoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bitcoin data-testid="BitcoinIcon" className={classes} />
  );
}
