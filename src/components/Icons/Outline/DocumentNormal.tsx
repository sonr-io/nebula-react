
import DocumentNormal from "../../../assets/outline/DocumentNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentNormalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentNormal data-testid="DocumentNormalIcon" className={classes} />
  );
}
