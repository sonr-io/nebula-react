
import DocumentUpload from "../../../assets/outline/DocumentUpload.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentUploadIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DocumentUpload} data-testid="DocumentUploadIcon" className={classes} />
  );
}
