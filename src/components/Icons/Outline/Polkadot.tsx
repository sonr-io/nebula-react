
import Polkadot from "../../../assets/outline/Polkadot.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PolkadotIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Polkadot data-testid="PolkadotIcon" className={classes} />
  );
}
