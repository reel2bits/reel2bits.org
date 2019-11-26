<template>
  <div class="container-fluid bg-primary pb-2">
    <div class="container px-2">
      <div class="row">
        <div class="col-md-7 mx-auto text-center">
          <img
            src="../assets/home/white-logo.svg"
            alt="reel2bits"
            class="mt-5 mb-4"
          />
          <h1 class="text-center text-white display-3 font-weight-bold">
            <translate translate-context="Content/Home/Title/Tagline"
              >Share your sounds with the fediverse</translate
            >
          </h1>
          <a
            class="btn btn-secondary btn-lg mt-4 mb-5"
            href="#contribute"
            role="button"
          >
            <translate translate-context="Content/Home/Button/Call to action"
              >Contribute</translate
            ></a
          >
        </div>
      </div>
      <b-navbar toggleable="lg" type="dark" class="px-0 mt-2">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }"
              ><translate translate-context="Navigation/Link.Title"
                >Home</translate
              ></b-nav-item
            >
            <b-nav-item
              href="https://docs-develop.reel2bits.org"
              target="_blank"
              ><translate translate-context="Navigation/Link.Title"
                >Documentation</translate
              ></b-nav-item
            >
            <b-nav-item href="https://demo.reel2bits.org" target="_blank"
              ><translate translate-context="Navigation/Link.Title"
                >Demo</translate
              ></b-nav-item
            >
            <b-nav-item
              href="https://github.com/rhaamo/reel2bits"
              target="_blank"
              ><translate translate-context="Navigation/Link.Title"
                >Source Code</translate
              ></b-nav-item
            >
            <b-nav-item :to="{ name: 'contact' }"
              ><translate translate-context="Navigation/Link.Title"
                >Contact</translate
              ></b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <LanguageSwitcher />
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher";
import MainLogo from "./MainLogo";

export default {
  components: {
    LanguageSwitcher
  }
};
</script>
