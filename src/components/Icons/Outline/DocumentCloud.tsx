
import DocumentCloud from "../../../assets/outline/DocumentCloud.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentCloudIcon({ className, dataTestid = "DocumentCloudIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentCloud data-testid={dataTestid} className={classes} {...rest} />
  );
}
