
import DocumentUpload from "../../../assets/filled/DocumentUpload.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentUploadIcon({ className, dataTestid = "DocumentUploadIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentUpload data-testid={dataTestid} className={classes} {...rest} />
  );
}
