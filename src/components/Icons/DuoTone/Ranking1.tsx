
import Ranking1 from "../../../assets/duotone/Ranking1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Ranking1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Ranking1} data-testid="Ranking1Icon" className={classes} />
  );
}
