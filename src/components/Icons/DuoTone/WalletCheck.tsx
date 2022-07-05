
import WalletCheck from "../../../assets/duotone/WalletCheck.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WalletCheckIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <WalletCheck data-testid="WalletCheckIcon" className={classes} />
  );
}
