<template>
  <div class="row">
    <section v-html="content"></section>
  </div>
</template>

<script>
import PageMixin from "../PageMixin";

export default {
  mixins: [PageMixin],
  data() {
    return {
      rawContent: null,
      marked: null
    };
  },
  computed: {
    page() {
      return this.$router.currentRoute.name;
    },
    content() {
      if (this.rawContent) {
        return this.marked(this.rawContent);
      }
      return null;
    }
  },
  async created() {
    let self = this;
    this.marked = (await import("marked")).default;
    await self.render();
  },
  methods: {
    getInnerTitle() {
      return this.$pgettext("HTML/Meta/Title", "Code of Conduct");
    },
    async render() {
      let language = this.$language.current;
      let fallback = "en_US";
      // marked('# Marked in the browser\n\nRendered by **marked**.');Fimport
      let content;
      try {
        content = await import(`../pages/${this.page}/${language}`);
      } catch {
        content = await import(`../pages/${this.page}/${fallback}`);
      }
      this.rawContent = content.default;
    }
  },
  watch: {
    async "$language.current"() {
      await this.render();
    }
  }
};
</script>
