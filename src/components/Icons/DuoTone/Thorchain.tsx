
import Thorchain from "../../../assets/duotone/Thorchain.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ThorchainIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Thorchain} data-testid="ThorchainIcon" className={classes} />
  );
}
