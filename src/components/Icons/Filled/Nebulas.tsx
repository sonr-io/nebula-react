
import Nebulas from "../../../assets/filled/Nebulas.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function NebulasIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Nebulas data-testid="NebulasIcon" className={classes} />
  );
}
