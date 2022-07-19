
import DocumentFilter from "../../../assets/duotone/DocumentFilter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentFilterIcon({ className, dataTestid = "DocumentFilterIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentFilter data-testid={dataTestid} className={classes} {...rest} />
  );
}
