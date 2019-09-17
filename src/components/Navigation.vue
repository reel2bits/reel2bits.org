<template>
  <div>
    <b-navbar toggleable="lg" type="light" fixed="top">
      <div class="container">
        <b-navbar-brand :to="{ name: 'home' }"
          ><MainLogo />
          <h3 class="text-body mx-3 d-inline">
            <translate translate-context="Navigation/Link.Title">
              reel2bits project
            </translate>
          </h3></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'contact' }">Contact</b-nav-item>
            <b-nav-item
              href="https://github.com/rhaamo/reel2bits"
              target="_blank"
              ><translate translate-context="Navigation/Link.Title"
                >Source Code</translate
              ></b-nav-item
            >
            <b-nav-item
              href="https://docs-develop.reel2bits.org"
              target="_blank"
              ><translate translate-context="Navigation/Link.Title"
                >Documentation</translate
              ></b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <LanguageSwitcher />
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher";
import MainLogo from "./MainLogo";

export default {
  components: {
    MainLogo,
    LanguageSwitcher
  },
  data() {
    return {
      showMenu: false
    };
  },
  created() {
    let self = this;
    this.$router.afterEach(() => {
      self.showMenu = false;
    });
  },
  computed: {
    labels() {
      return {
        ariaLabel: this.$pgettext("Navigation/Aria.Label", "Main navigation"),
        homeTitle: this.$pgettext("Navigation/Link.Title", "Return to homepage")
      };
    }
  }
};
</script>
