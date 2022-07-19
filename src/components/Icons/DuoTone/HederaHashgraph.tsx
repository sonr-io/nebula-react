
import HederaHashgraph from "../../../assets/duotone/HederaHashgraph.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HederaHashgraphIcon({ className, dataTestid = "HederaHashgraphIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HederaHashgraph data-testid={dataTestid} className={classes} {...rest} />
  );
}
