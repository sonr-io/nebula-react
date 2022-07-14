
import Document from "../../../assets/duotone/Document.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Document} data-testid="DocumentIcon" className={classes} />
  );
}
