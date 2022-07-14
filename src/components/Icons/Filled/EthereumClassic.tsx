
import EthereumClassic from "../../../assets/filled/EthereumClassic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EthereumClassicIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EthereumClassic data-testid="EthereumClassicIcon" className={classes} />
  );
}
