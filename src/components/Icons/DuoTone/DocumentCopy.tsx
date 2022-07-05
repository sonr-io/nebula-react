
import DocumentCopy from "../../../assets/duotone/DocumentCopy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentCopyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentCopy data-testid="DocumentCopyIcon" className={classes} />
  );
}
