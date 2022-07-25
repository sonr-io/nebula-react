
import KyberNetwork from "../../../assets/outline/KyberNetwork.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KyberNetworkIcon({ className, dataTestid = "KyberNetworkIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <KyberNetwork data-testid={dataTestid} className={classes} {...rest} />
  );
}
