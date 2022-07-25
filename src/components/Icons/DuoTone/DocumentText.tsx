
import DocumentText from "../../../assets/duotone/DocumentText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentTextIcon({ className, dataTestid = "DocumentTextIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentText data-testid={dataTestid} className={classes} {...rest} />
  );
}
