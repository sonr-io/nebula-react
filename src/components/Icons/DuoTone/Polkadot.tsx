
import Polkadot from "../../../assets/duotone/Polkadot.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PolkadotIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Polkadot} data-testid="PolkadotIcon" className={classes} />
  );
}
