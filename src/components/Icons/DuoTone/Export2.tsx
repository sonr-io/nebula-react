
import Export2 from "../../../assets/duotone/Export2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Export2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Export2 data-testid="Export2Icon" className={classes} />
  );
}
