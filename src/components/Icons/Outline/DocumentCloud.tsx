
import DocumentCloud from "../../../assets/outline/DocumentCloud.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentCloudIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentCloud data-testid="DocumentCloudIcon" className={classes} />
  );
}
