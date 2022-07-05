
import Cardano from "../../../assets/outline/Cardano.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CardanoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Cardano data-testid="CardanoIcon" className={classes} />
  );
}
