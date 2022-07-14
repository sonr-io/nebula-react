
import BitcoinConvert from "../../../assets/duotone/BitcoinConvert.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BitcoinConvertIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BitcoinConvert data-testid="BitcoinConvertIcon" className={classes} />
  );
}
