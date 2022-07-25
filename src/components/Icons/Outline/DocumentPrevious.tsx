
import DocumentPrevious from "../../../assets/outline/DocumentPrevious.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentPreviousIcon({ className, dataTestid = "DocumentPreviousIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentPrevious data-testid={dataTestid} className={classes} {...rest} />
  );
}
