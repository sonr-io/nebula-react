
import DocumentCode from "../../../assets/filled/DocumentCode.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentCodeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentCode data-testid="DocumentCodeIcon" className={classes} />
  );
}
