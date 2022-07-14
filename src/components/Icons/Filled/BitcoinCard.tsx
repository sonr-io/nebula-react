
import BitcoinCard from "../../../assets/filled/BitcoinCard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BitcoinCardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BitcoinCard} data-testid="BitcoinCardIcon" className={classes} />
  );
}
