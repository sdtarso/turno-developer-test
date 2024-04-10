import "./bootstrap";
import "../css/app.css";

import { createApp, h, DefineComponent } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  CoPlus,
  FaChevronDown,
  FaBars,
  FaBalanceScaleRight,
  FaLevelUpAlt,
  FaLevelDownAlt,
  FaMoneyCheckAlt,
  FaBell,
  FaUserAlt,
  FaCog,
  FaQuestionCircle,
} from "oh-vue-icons/icons";

addIcons(
  CoPlus,
  FaChevronDown,
  FaBars,
  FaBalanceScaleRight,
  FaLevelUpAlt,
  FaLevelDownAlt,
  FaMoneyCheckAlt,
  FaBell,
  FaUserAlt,
  FaCog,
  FaQuestionCircle
);

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob<DefineComponent>("./Pages/**/*.vue")
    ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .component("VIcon", OhVueIcon)
      .mount(el);
  },
  progress: {
    color: "#4B5563",
  },
});
