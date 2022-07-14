
import DocumentNormal from "../../../assets/outline/DocumentNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentNormalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DocumentNormal} data-testid="DocumentNormalIcon" className={classes} />
  );
}
