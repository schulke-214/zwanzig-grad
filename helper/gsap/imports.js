// import variables from 'styles/helper/vars.scss';

import TweenLite from "gsap/umd/TweenLite";
import TimelineMax from "gsap/umd/TimelineMax";
import CSSPlugin from "gsap/umd/CSSPlugin";
import BezierPlugin from "gsap/umd/BezierPlugin";
import CustomEase from "./custom-ease";

CustomEase.create("hard", 'M0,0 C0.8,0 0.2,1 1,1');
CustomEase.create("smooth", 'M0,0,C0.5,0.5,1,1,1,1');

// workaround to prevent tree shaking
export default {
    TweenLite,
    TimelineMax,
    CSSPlugin,
    BezierPlugin
};