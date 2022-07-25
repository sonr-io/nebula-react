
import Chainlink from "../../../assets/duotone/Chainlink.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChainlinkIcon({ className, dataTestid = "ChainlinkIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Chainlink data-testid={dataTestid} className={classes} {...rest} />
  );
}
