
import DocumentCloud from "../../../assets/duotone/DocumentCloud.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentCloudIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentCloud data-testid="DocumentCloudIcon" className={classes} />
  );
}
