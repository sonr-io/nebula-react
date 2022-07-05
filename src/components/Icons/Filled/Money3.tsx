
import Money3 from "../../../assets/filled/Money3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Money3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Money3 data-testid="Money3Icon" className={classes} />
  );
}
