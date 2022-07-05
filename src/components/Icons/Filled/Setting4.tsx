
import Setting4 from "../../../assets/filled/Setting4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Setting4Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Setting4 data-testid="Setting4Icon" className={classes} />
  );
}
