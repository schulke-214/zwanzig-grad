// import variables from 'styles/helper/vars.scss';

import TweenLite from "gsap/umd/TweenLite";
import TimelineLite from "gsap/umd/TimelineLite";
import CSSPlugin from "gsap/umd/CSSPlugin";
import TextPlugin from "gsap/umd/TextPlugin";
import ScrollToPlugin from "gsap/umd/ScrollToPlugin";
import BezierPlugin from "gsap/umd/BezierPlugin";
import CustomEase from "./custom-ease";

CustomEase.create("zwanzig-grad", "M0,0 C0.902,0 0.094,1 1,1");

// workaround to prevent tree shaking
export default {
    TweenLite,
    TimelineLite,
    CSSPlugin,
    TextPlugin,
    ScrollToPlugin,
    BezierPlugin
};