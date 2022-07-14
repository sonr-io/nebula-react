
import DocumentDownload from "../../../assets/outline/DocumentDownload.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentDownloadIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DocumentDownload} data-testid="DocumentDownloadIcon" className={classes} />
  );
}
