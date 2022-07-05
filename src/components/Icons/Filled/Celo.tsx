
import Celo from "../../../assets/filled/Celo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CeloIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Celo data-testid="CeloIcon" className={classes} />
  );
}
