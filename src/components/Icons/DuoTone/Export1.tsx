
import Export1 from "../../../assets/duotone/Export1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Export1Icon({ className, dataTestid = "Export1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Export1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
