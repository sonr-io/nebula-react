
import DocumentText from "../../../assets/duotone/DocumentText.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentTextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentText data-testid="DocumentTextIcon" className={classes} />
  );
}
