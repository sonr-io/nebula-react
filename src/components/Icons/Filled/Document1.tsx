
import Document1 from "../../../assets/filled/Document1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Document1Icon({ className, dataTestid = "Document1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Document1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
