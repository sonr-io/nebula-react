
import DocumentText1 from "../../../assets/filled/DocumentText1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentText1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentText1 data-testid="DocumentText1Icon" className={classes} />
  );
}
