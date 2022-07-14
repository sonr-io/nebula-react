
import Tag2 from "../../../assets/filled/Tag2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Tag2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Tag2 data-testid="Tag2Icon" className={classes} />
  );
}
