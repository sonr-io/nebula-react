
import DocumentCloud from "../../../assets/filled/DocumentCloud.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentCloudIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DocumentCloud} data-testid="DocumentCloudIcon" className={classes} />
  );
}
