import './utils/loadAssets';
import './utils/smoothScroll';
import 'normalize.css';
import './styles/index.scss';

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
