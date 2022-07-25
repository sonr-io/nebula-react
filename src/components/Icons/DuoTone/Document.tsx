
import Document from "../../../assets/duotone/Document.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentIcon({ className, dataTestid = "DocumentIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Document data-testid={dataTestid} className={classes} {...rest} />
  );
}
