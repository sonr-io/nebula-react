
import DocumentPrevious from "../../../assets/duotone/DocumentPrevious.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentPreviousIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentPrevious data-testid="DocumentPreviousIcon" className={classes} />
  );
}
