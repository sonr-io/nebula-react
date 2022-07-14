
import KyberNetwork from "../../../assets/duotone/KyberNetwork.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KyberNetworkIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={KyberNetwork} data-testid="KyberNetworkIcon" className={classes} />
  );
}
