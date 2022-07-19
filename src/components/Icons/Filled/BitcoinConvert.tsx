
import BitcoinConvert from "../../../assets/filled/BitcoinConvert.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BitcoinConvertIcon({ className, dataTestid = "BitcoinConvertIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BitcoinConvert data-testid={dataTestid} className={classes} {...rest} />
  );
}
