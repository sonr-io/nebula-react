
import WalletAdd from "../../../assets/filled/WalletAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WalletAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={WalletAdd} data-testid="WalletAddIcon" className={classes} />
  );
}
