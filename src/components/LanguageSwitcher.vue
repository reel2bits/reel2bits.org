<template>
  <b-dropdown id="language" :text="currentLanguage" right variant="primary">
    <b-dropdown-item
      v-for="(language, key) in $language.available"
      :key="key"
      :value="key"
      @click="$router.push({ params: { locale: key } })"
      >{{ language }}</b-dropdown-item
    >
  </b-dropdown>
</template>

<script>
export default {
  computed: {
    currentLanguage() {
      let lang = this.$language.available[this.$language.current];
      if (!lang) {
        return "Unknown language";
      } else {
        return lang;
      }
    }
  }
};
</script>
