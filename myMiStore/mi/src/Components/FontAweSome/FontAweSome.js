import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAweSome/FontAweSome.css';

library.add(fab, faCheckSquare, faCoffee);


export const github = <FontAwesomeIcon icon={["fab", "github"]} size="1.2x" className="icon"/>
export const youtube = <FontAwesomeIcon icon={["fab", "youtube"]} size="1.2x" className="icon"/>
export const facebook = <FontAwesomeIcon icon={["fab", "facebook"]} size="1.2x" className="icon"/>
export const twitter = <FontAwesomeIcon icon={["fab", "twitter"]} size="1.2x" className="icon"/>