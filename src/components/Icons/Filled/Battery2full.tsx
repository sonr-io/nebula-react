
import Battery2full from "../../../assets/filled/Battery2full.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Battery2fullIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Battery2full data-testid="Battery2fullIcon" className={classes} />
  );
}
