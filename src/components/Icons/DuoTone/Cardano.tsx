
import Cardano from "../../../assets/duotone/Cardano.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardanoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Cardano data-testid="CardanoIcon" className={classes} />
  );
}
