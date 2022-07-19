
import Stellar from "../../../assets/duotone/Stellar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StellarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Stellar data-testid="StellarIcon" className={classes} />
  );
}
