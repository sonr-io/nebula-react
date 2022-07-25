
import Export2 from "../../../assets/filled/Export2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Export2Icon({ className, dataTestid = "Export2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Export2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
