
import DocumentNormal from "../../../assets/outline/DocumentNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentNormalIcon({ className, dataTestid = "DocumentNormalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentNormal data-testid={dataTestid} className={classes} {...rest} />
  );
}
