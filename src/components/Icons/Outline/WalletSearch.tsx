
import WalletSearch from "../../../assets/outline/WalletSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <WalletSearch data-testid="WalletSearchIcon" className={classes} />
  );
}