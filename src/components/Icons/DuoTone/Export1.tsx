
import Export1 from "../../../assets/duotone/Export1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Export1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Export1} data-testid="Export1Icon" className={classes} />
  );
}
