
import DocumentText1 from "../../../assets/duotone/DocumentText1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentText1Icon({ className, dataTestid = "DocumentText1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentText1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
