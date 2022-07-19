
import DocumentCode from "../../../assets/filled/DocumentCode.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentCodeIcon({ className, dataTestid = "DocumentCodeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentCode data-testid={dataTestid} className={classes} {...rest} />
  );
}
