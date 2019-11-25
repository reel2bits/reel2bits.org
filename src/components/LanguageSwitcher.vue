<template>
  <b-dropdown id="language" :text="$language.current" right variant="primary">
    <b-dropdown-item
      v-for="(language, key) in $language.available"
      :key="key"
      :value="key">{{ language }}</b-dropdown-item>
  </b-dropdown>
</template>