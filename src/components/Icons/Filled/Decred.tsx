
import Decred from "../../../assets/filled/Decred.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DecredIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Decred data-testid="DecredIcon" className={classes} />
  );
}
