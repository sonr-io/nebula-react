
import DocumentCopy from "../../../assets/filled/DocumentCopy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentCopyIcon({ className, dataTestid = "DocumentCopyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentCopy data-testid={dataTestid} className={classes} {...rest} />
  );
}
