import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);

const buttonTimeline = gsap.timeline({ repeat: -1 });
// Need to wrap it inside DOMContentLoaded because ::after is not ready before dom is loaded
document.addEventListener('DOMContentLoaded', () => {
    buttonTimeline.to(CSSRulePlugin.getRule('.about__cta::after'), {
        left: '150%',
        duration: 1,
        ease: 'power1.in',
        delay: 4,
    });
});
