
import Document from "../../../assets/filled/Document.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Document data-testid="DocumentIcon" className={classes} />
  );
}
