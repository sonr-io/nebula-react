
import Hashtag1 from "../../../assets/duotone/Hashtag1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Hashtag1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Hashtag1} data-testid="Hashtag1Icon" className={classes} />
  );
}
