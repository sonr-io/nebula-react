
import DocumentNormal from "../../../assets/filled/DocumentNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentNormalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentNormal data-testid="DocumentNormalIcon" className={classes} />
  );
}
