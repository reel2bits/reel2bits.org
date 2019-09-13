import Vue from "vue";
import GetTextPlugin from "vue-gettext";

import locales from "@/locales";

let availableLanguages = (function() {
  let l = {};
  locales.locales.forEach(c => {
    l[c.code] = c.label;
  });
  return l;
})();
let defaultLanguage = "en_US";
Vue.use(GetTextPlugin, {
  availableLanguages: availableLanguages,
  defaultLanguage: defaultLanguage,
  languageVmMixin: {
    computed: {
      currentKebabCase: function() {
        return this.current.toLowerCase().replace("_", "-");
      }
    }
  },
  translations: {},
  silent: true
});

export default {};
