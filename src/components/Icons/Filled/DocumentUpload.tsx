
import DocumentUpload from "../../../assets/filled/DocumentUpload.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentUploadIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentUpload data-testid="DocumentUploadIcon" className={classes} />
  );
}
