
import WalletCheck from "../../../assets/filled/WalletCheck.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletCheckIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <WalletCheck data-testid="WalletCheckIcon" className={classes} />
  );
}
