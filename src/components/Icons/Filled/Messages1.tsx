
import Messages1 from "../../../assets/filled/Messages1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Messages1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Messages1} data-testid="Messages1Icon" className={classes} />
  );
}
