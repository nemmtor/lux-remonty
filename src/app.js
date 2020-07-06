import './utils/contactForm';
import './utils/cookieWarning';
import './utils/navMenu';
import './utils/opinions';
import './utils/smoothScroll';

import 'normalize.css';
import './styles/index.scss';

// Scroll to top after page reload
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
