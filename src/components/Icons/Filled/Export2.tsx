
import Export2 from "../../../assets/filled/Export2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Export2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Export2} data-testid="Export2Icon" className={classes} />
  );
}
