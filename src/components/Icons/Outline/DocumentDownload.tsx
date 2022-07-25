
import DocumentDownload from "../../../assets/outline/DocumentDownload.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentDownloadIcon({ className, dataTestid = "DocumentDownloadIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentDownload data-testid={dataTestid} className={classes} {...rest} />
  );
}
