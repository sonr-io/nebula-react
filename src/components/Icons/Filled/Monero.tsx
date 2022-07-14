
import Monero from "../../../assets/filled/Monero.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneroIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Monero data-testid="MoneroIcon" className={classes} />
  );
}
