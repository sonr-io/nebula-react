
import DocumentCode2 from "../../../assets/filled/DocumentCode2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentCode2Icon({ className, dataTestid = "DocumentCode2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentCode2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
