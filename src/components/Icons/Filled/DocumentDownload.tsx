
import DocumentDownload from "../../../assets/filled/DocumentDownload.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentDownloadIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentDownload data-testid="DocumentDownloadIcon" className={classes} />
  );
}
