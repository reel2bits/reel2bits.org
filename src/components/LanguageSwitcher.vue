<template>
  <select
    id="language"
    name="language"
    :value="$language.current"
    @change="$router.push({ params: { locale: $event.target.value } })"
  >
    <option
      v-for="(language, key) in $language.available"
      :key="key"
      :value="key"
      >{{ language }}</option
    >
  </select>
</template>
