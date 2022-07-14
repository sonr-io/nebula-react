
import BitcoinConvert from "../../../assets/filled/BitcoinConvert.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BitcoinConvertIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BitcoinConvert} data-testid="BitcoinConvertIcon" className={classes} />
  );
}
