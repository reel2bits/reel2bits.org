<template>
  <div>
    <div class="container-fluid bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-7 mx-auto text-center">
            <img src="../assets/home/white-logo.svg" alt="Reel2Bits"/>
            <h1 class="text-center text-white" style="font-size: 5.15em">
              Share your sounds  with the fediverse
            </h1>
            <a
              class="btn btn-secondary btn-lg my-4"
              href="#contribute"
              role="button"
              >Contribute</a
            >
          </div>
        </div>
     <b-navbar toggleable="lg" type="dark">
      <div class="container">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              href="https://docs-develop.reel2bits.org"
              target="_blank"
              ><translate translate-context="Navigation/Link.Title"
                >Documentation</translate
              ></b-nav-item
            >
            <b-nav-item
              href="https://demo.reel2bits.org"
              target="_blank"
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
            <b-nav-item href="#Contact">Contact</b-nav-item>
            
            
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <LanguageSwitcher />
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img src="../assets/home/sound.svg" alt="sound icon" class="d-block mx-auto" />
          <h2 class="text-center">
            <translate translate-context="Content/Home/Title" >
              It’s all about the sound
            </translate>
          </h2>
          <p>
            <translate translate-context="Content/Home/Paragraph">
              Reel2Bits is an open source project that lets you upload your
              music, podcasts or other sounds, organize it into albums, and
              follow other users to see what they share.
            </translate>
          </p>
        </div>
        <div class="col-4">
          <img src="../assets/home/fediverse.svg" alt="fediverse icon" class="d-block mx-auto" />
          <h2 class="text-center">
            <translate translate-context="Content/Home/Title">
              It’s huge!
            </translate>
          </h2>
          <p>
            <translate translate-context="Content/Home/Paragraph">
              Each Reel2Bits instance is a part of a biger network called
              Fediverse. It means that users from differnt instances can connect
              with each other, and even the users of other activitypub enabled
              platforms, like Mastodon or Pleroma can interact with Reel2Bits
              users.
            </translate>
          </p>
        </div>
        <div class="col-4">
          <img src="../assets/home/opensource.svg" alt="opensource icon" class="d-block mx-auto" />
          <h2 class="text-center">
            <translate translate-context="Content/Home/Title">
              It’s opensource
            </translate>
          </h2>
          <p>
              Reel2Bits is an open source project, which means anybody can use,
              modify or tweak it however they want. Ready to dig through the
              code? Check out our <a href="https://github.com/rhaamo/reel2bits">GitHub page</a>!
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-primary text-center">
      <h2 class="text-white text-center">
        <translate translate-context="Content/Home/Paragraph"
          >It's simple</translate
        >
      </h2>

      <div class="col-8 mx-auto">
        <div>
          <b-nav type="dark">
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item class="text-white">Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
          </b-nav>
        </div>
        <b-carousel
          id="carousel-1"
          :interval="5000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            :caption="labels.slideMain"
            img-src="../assets/home/main.png"
          ></b-carousel-slide>

          <b-carousel-slide
            :caption="labels.slideUserProfile"
            img-src="../assets/home/profile.png"
          ></b-carousel-slide>

          <b-carousel-slide
            :caption="labels.slideSingleTrack"
            img-src="../assets/home/track.png"
          ></b-carousel-slide>

          <b-carousel-slide
            :caption="labels.slideSingleAlbum"
            img-src="../assets/home/album.png"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <a
        class="btn btn-secondary btn-lg"
        href="https://demo.reel2bits.org/"
        role="button"
        >See for yourself</a
      >
    </div>
    <div class="container">
      <div class="row ">
        <div class="col-4 mx-auto">
          <h2 class="text-center" id="contribute">
            <translate translate-context="Content/Home/Title">
              It’s currently under construction
            </translate>
          </h2>
          <p>
              Reel2Bits came a long way to the point it’s in now. We are still
              working to make Reel2Bits nice and smooth in every aspect, and
              with your help we can make it a lot faster. Reel2Bits is written
              in Python, Flask and VueJS. Feel like contributing? Check out
              <a href="https://github.com/rhaamo/reel2bits">GitHub page</a> and
              <a href="https://docs-develop.reel2bits.org/">documentation</a>.
              Have questions? Ask them on
              <a href="https://riot.im/app/#/room/#reel2bits:otter.sh"
                >Reel2Bits matrix channel</a
              >, or email them to
              <a href="mailto(mail.value)">project maintener</a>.
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-light">
      <div class="container">
        <h2 class="text-center">
          <translate translate-context="Content/Home/Button"
            >Get it</translate
          >
        </h2>
        <div class="row justify-content-center">
          <div class="col-4">
            <p>
              Want to install Reel2Bits on your hosting? Check the documentation
            </p>
            <a
              class="btn btn-primary"
              href="https://docs-develop.reel2bits.org/installation/index.html"
              role="button"
              >Installation Guides</a
            >
          </div>
          <div class="col-4">
            <p>
              Have a YunoHost? Install it from the package
            </p>
            <a
              class="btn btn-primary"
              href="https://docs-develop.reel2bits.org/installation/index.html"
              role="button"
              ><img src="../assets/home/yuno-install.png" /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="Contact">
      <h2 class="text-center">
        <translate translate-context="Content/Home/Contact"
          >Have questions? Ask them in matrix channel or by email</translate
        >
      </h2>
    </div>
    <div class="container-fluid bg-dark text-center">
      <p class="text-white">
        © Copyright 2019, Dashie.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import "./../_variables.scss";

.carousel-caption h3 {
  color: $shade-100;
}

.carousel-indicators li {
  background-color: $shade-25;
}
.carousel-indicators .active {
  background-color: $brand-2;
}
</style>

<script>
import PageMixin from "../PageMixin";
import LanguageSwitcher from "../components/LanguageSwitcher";


export default {
  mixins: [PageMixin],
  components: {
    LanguageSwitcher
  },
  computed: {
    labels() {
      return {
        slideMain: this.$pgettext(
          "Content/Home/Slide/Caption",
          "Timeline"
        ),
        slideUserProfile: this.$pgettext(
          "Content/Home/Slide/Caption",
          "Albums"
        ),
        slideSingleTrack: this.$pgettext(
          "Content/Home/Slide/Caption",
          "Track"
        ),
        slideSingleAlbum: this.$pgettext(
          "Content/Home/Slide/Caption",
          "Album"
        )
      };
    }
  },
  created() {},
  methods: {}
};
</script>
