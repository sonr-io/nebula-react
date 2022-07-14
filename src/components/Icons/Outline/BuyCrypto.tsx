
import BuyCrypto from "../../../assets/outline/BuyCrypto.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BuyCryptoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BuyCrypto data-testid="BuyCryptoIcon" className={classes} />
  );
}
