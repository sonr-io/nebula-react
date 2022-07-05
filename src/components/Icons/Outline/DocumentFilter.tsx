
import DocumentFilter from "../../../assets/outline/DocumentFilter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentFilterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentFilter data-testid="DocumentFilterIcon" className={classes} />
  );
}
