
import DocumentForward from "../../../assets/filled/DocumentForward.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentForwardIcon({ className, dataTestid = "DocumentForwardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentForward data-testid={dataTestid} className={classes} {...rest} />
  );
}
