
import Polkadot from "../../../assets/duotone/Polkadot.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PolkadotIcon({ className, dataTestid = "PolkadotIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Polkadot data-testid={dataTestid} className={classes} {...rest} />
  );
}
