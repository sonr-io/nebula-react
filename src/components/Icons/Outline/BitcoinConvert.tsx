
import BitcoinConvert from "../../../assets/outline/BitcoinConvert.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BitcoinConvertIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BitcoinConvert data-testid="BitcoinConvertIcon" className={classes} />
  );
}
