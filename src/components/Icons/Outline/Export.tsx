
import Export from "../../../assets/outline/Export.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ExportIcon({ className, dataTestid = "ExportIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Export data-testid={dataTestid} className={classes} {...rest} />
  );
}
