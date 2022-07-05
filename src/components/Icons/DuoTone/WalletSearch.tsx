
import WalletSearch from "../../../assets/duotone/WalletSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WalletSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <WalletSearch data-testid="WalletSearchIcon" className={classes} />
  );
}
