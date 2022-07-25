
import Export3 from "../../../assets/filled/Export3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Export3Icon({ className, dataTestid = "Export3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Export3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
