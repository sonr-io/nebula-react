
import Archive2 from "../../../assets/filled/Archive2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Archive2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Archive2} data-testid="Archive2Icon" className={classes} />
  );
}
