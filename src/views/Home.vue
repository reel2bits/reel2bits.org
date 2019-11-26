<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <img
            src="../assets/home/sound.svg"
            alt="sound icon"
            class="d-block mx-auto mb-2"
          />
          <h2 class="text-center">
            <translate translate-context="Content/Home/Title">
              It’s all about the sound
            </translate>
          </h2>
          <p>
            <translate translate-context="Content/Home/Paragraph">
              reel2bits is an open source project that lets you upload your
              music, podcasts or other sounds, organize it into albums, and
              follow other users to see what they share.
            </translate>
          </p>
        </div>
        <div class="col-md-4">
          <img
            src="../assets/home/fediverse.svg"
            alt="fediverse icon"
            class="d-block mx-auto mb-2"
          />
          <h2 class="text-center">
            <translate translate-context="Content/Home/Title">
              It’s huge!
            </translate>
          </h2>
          <p>
            <translate translate-context="Content/Home/Paragraph">
              Each reel2bits instance is a part of a biger network called the
              Fediverse. It means that users from differnt instances can connect
              with each other, and even the users of other activitypub enabled
              platforms, like Mastodon or Pleroma can interact with reel2bits
              users.
            </translate>
          </p>
        </div>
        <div class="col-md-4">
          <img
            src="../assets/home/opensource.svg"
            alt="opensource icon"
            class="d-block mx-auto mb-2"
          />
          <h2 class="text-center">
            <translate translate-context="Content/Home/Title">
              It’s opensource
            </translate>
          </h2>
          <p v-translate translate-context="Content/Home/Paragraph">
            reel2bits is an open source project, which means anybody can use,
            modify or tweak it however they want. Ready to dig through the code?
            Check out our
            <a href="https://github.com/reel2bits/reel2bits">GitHub page</a>!
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-primary text-center py-5">
      <h2 class="text-white text-center">
        <translate translate-context="Content/Home/Title"
          >It's simple</translate
        >
      </h2>

      <div class="col-md-8 mx-auto my-4">
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
        ><translate translate-context="Content/Home/Button/Call to action"
          >See for yourself</translate
        ></a
      >
    </div>
    <div class="container py-5" id="contribute">
      <div class="row ">
        <div class="col-md-4 mx-auto">
          <img
            src="../assets/home/underconstruction.svg"
            alt="fediverse icon"
            class="d-block mx-auto mb-2"
          />
          <h2 class="text-center">
            <translate translate-context="Content/Home/Title">
              It’s currently under construction
            </translate>
          </h2>
          <p v-translate translate-context="Content/Home/Paragraph">
            reel2bits came a long way to the point it’s in now.<br />
            We are still working to make reel2bits nice and smooth in every
            aspect, and with your help we can make it a lot faster.<br />
            reel2bits is written in Python, Flask and VueJS.<br />
            Feel like contributing?<br />
            Check out the
            <a href="https://github.com/rhaamo/reel2bits">GitHub page</a> and
            <a href="https://docs-develop.reel2bits.org/">documentation</a
            >.<br />
            Have questions? Ask them on the
            <a href="https://riot.im/app/#/room/#reel2bits:otter.sh"
              >reel2bits matrix channel</a
            >, or email them to the
            <a href="mailto:dashie@otter.sh">project maintener</a>.
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-light py-5">
      <div class="container">
        <h2 class="text-center">
          <translate translate-context="Content/Home/Title">Get it</translate>
        </h2>
        <div class="row justify-content-center">
          <div class="col-md-4 text-center mt-4">
            <p style="min-height: 3em">
              <translate translate-context="Content/Home/Paragraph">
                Want to install reel2bits on your hosting? Check the
                documentation
              </translate>
            </p>
            <a
              class="btn btn-primary py-0"
              href="https://docs-develop.reel2bits.org/installation/index.html"
              role="button"
              style="line-height: 60px; font-size: 1.5em"
              ><translate translate-context="Content/Home/Button"
                >Installation Guides</translate
              ></a
            >
          </div>
          <div class="col-md-4 text-center mt-4">
            <p style="min-height: 3em">
              <translate translate-context="Content/Home/Paragraph">
                Have a YunoHost? Install it from the package
              </translate>
            </p>
            <a
              class="btn btn-primary"
              href="https://install-app.yunohost.org/?app=reel2bits"
              role="button"
              ><img src="../assets/home/yuno-install.png"
            /></a>
            <p class="mt-2">
              <small v-translate translate-context="Content/Home/Paragraph">
                Check the package
                <a href="https://github.com/YunoHost-Apps/reel2bits_ynh"
                  >GitHub page</a
                >
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5 my-5" id="Contact">
      <h2
        class="text-center my-5"
        v-translate
        translate-context="Content/Home/Paragraph"
      >
        Have questions? Ask them in
        <a href="https://riot.im/app/#/room/#reel2bits:otter.sh"
          >matrix channel</a
        >
        or by <a href="mailto:dashie@otter.sh">email</a>.
      </h2>
    </div>
    <div class="container-fluid bg-dark text-center py-3 my-0">
      <p class="text-white my-0 py-0" v-translate translate-context="Footer">
        © Copyright 2016-2019, reel2bits maintainers and contributors.
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

export default {
  mixins: [PageMixin],
  computed: {
    labels() {
      return {
        slideMain: this.$pgettext("Content/Home/Slide/Caption", "Timeline"),
        slideUserProfile: this.$pgettext(
          "Content/Home/Slide/Caption",
          "Albums"
        ),
        slideSingleTrack: this.$pgettext("Content/Home/Slide/Caption", "Track"),
        slideSingleAlbum: this.$pgettext("Content/Home/Slide/Caption", "Album")
      };
    }
  },
  created() {},
  methods: {}
};
</script>
