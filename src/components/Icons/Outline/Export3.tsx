
import Export3 from "../../../assets/outline/Export3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Export3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Export3 data-testid="Export3Icon" className={classes} />
  );
}
