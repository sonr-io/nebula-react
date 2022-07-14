
import Ontology from "../../../assets/duotone/Ontology.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function OntologyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ontology data-testid="OntologyIcon" className={classes} />
  );
}
