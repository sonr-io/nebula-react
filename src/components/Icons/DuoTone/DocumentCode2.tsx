
import DocumentCode2 from "../../../assets/duotone/DocumentCode2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentCode2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentCode2 data-testid="DocumentCode2Icon" className={classes} />
  );
}
