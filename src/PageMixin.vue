<script>
import Vue from "vue";
import locales from "./locales";

export default {
  props: ["locale"],
  created() {
    this.autodetectLanguage();
  },

  head: {
    title() {
      return {
        inner: this.getInnerTitle()
      };
    },
    meta: function() {
      return [
        {
          name: "description",
          content: this.$pgettext(
            "Content/Home/Header",
            "A platform to share music and podcasts"
          )
        },
        {
          "http-equiv": "content-language",
          content: this.$language.current.replace("_", "-")
        }
      ];
    },
    link: function() {
      let self = this;
      let links = locales.locales.map(l => {
        let params = {
          ...self.$route.params,
          locale: l.code
        };
        let resolved = self.$router.resolve({
          name: self.$route.name,
          params
        });
        return {
          rel: "alternate",
          hreflang: l.code.replace("_", "-"),
          href: `${resolved.href}`
        };
      });
      return links;
    }
  },
  methods: {
    getInnerTitle() {
      return this.$pgettext(
        "HTML/Meta/Title",
        "Your free and decentralized audio and podcasts platform"
      );
    },
    autodetectLanguage() {
      let userLanguage =
        this.locale || navigator.language || navigator.userLanguage;
      let available = locales.locales.map(e => {
        return e.code;
      });
      let candidate;
      let matching = available.filter(a => {
        return userLanguage.replace("-", "_") === a;
      });
      let almostMatching = available.filter(a => {
        return userLanguage.replace("-", "_").split("_")[0] === a.split("_")[0];
      });
      if (matching.length > 0) {
        candidate = matching[0];
      } else if (almostMatching.length > 0) {
        candidate = almostMatching[0];
      } else {
        return;
      }
      this.switchLanguage(candidate);
    },
    switchLanguage(newValue) {
      let self = this;
      import(`./translations/${newValue}.json`)
        .then(response => {
          Vue.$translations[newValue] = response.default[newValue];
        })
        .finally(() => {
          // set current language twice, otherwise we seem to have a cache somewhere
          // and rendering does not happen
          self.$language.current = "noop";
          self.$language.current = newValue;
          if (
            self.$route.params.locale &&
            self.$route.params.locale !== newValue
          ) {
            self.$router.push({ params: { locale: newValue } });
          }
          self.$emit("updateHead");
        });
    }
  },
  watch: {
    "$route.params.locale"(newValue) {
      if (newValue) {
        this.switchLanguage(newValue);
      }
    }
  }
};
</script>
