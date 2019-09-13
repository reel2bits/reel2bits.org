<template>
  <div class="row">
    <section>
      <h1>
        <translate translate-context="Content/Error/Header"
          >Page not found</translate
        >
      </h1>
      <p>
        <translate translate-context="Content/Error/Paragraph"
          >We're sorry, the page your requested doesn't exist.</translate
        >
      </p>
      <p>
        <router-link class="pure-button" :to="{ name: 'home' }">
          <translate translate-context="Content/Error/Link"
            >Go back to home page</translate
          >
        </router-link>
      </p>
    </section>
  </div>
</template>

<script>
import PageMixin from "../PageMixin";

export default {
  mixins: [PageMixin]
};
</script>
