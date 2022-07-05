
import WalletAdd from "../../../assets/filled/WalletAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WalletAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <WalletAdd data-testid="WalletAddIcon" className={classes} />
  );
}
