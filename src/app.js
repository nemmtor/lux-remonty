import 'normalize.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './utils/aboutCtaAnimation';
import './utils/contactForm';
import './utils/cookieWarning';
import './utils/linkContactDetails';
import './utils/navMenu';
import './utils/opinions';
import './utils/smoothScroll';
import './styles/index.scss';

AOS.init({
    once: true,
});

// Scroll to top after page reload
// window.onbeforeunload = () => {
//     window.scrollTo(0, 0);
// };
