<template>
  <div>
    <div class="container-fluid bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-7 mx-auto text-center">
            <WhiteLogo />
            <h1 class="text-center text-white" style="font-size: 5.15em">
              Share your sounds  with the fediverse
            </h1>
            <a class="btn btn-secondary btn-lg my-4" href="#contribute" role="button">Contribute</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <svg class="d-block mx-auto" width="128px" height="128px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Sound icon</title>
              <desc>Sound icon</desc>
              <g id="Promo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Landing" transform="translate(-636.000000, -703.000000)" fill-rule="nonzero">
                      <g id="Group-6" transform="translate(636.000000, 703.000000)">
                          <circle id="Oval" fill="#C728B6" cx="64" cy="64" r="64"></circle>
                          <path d="M68.7071068,33.7071068 C68.8946432,33.8946432 69,34.1489971 69,34.4142136 L69,93.5857864 C69,94.1380712 68.5522847,94.5857864 68,94.5857864 C67.7347835,94.5857864 67.4804296,94.4804296 67.2928932,94.2928932 L49,76 L37,76 L37,52 L49,52 L67.2928932,33.7071068 C67.6834175,33.3165825 68.3165825,33.3165825 68.7071068,33.7071068 Z M73,48 L73,44 C84.045695,44 93,52.954305 93,64 C93,74.9306357 84.2312714,83.813225 73.3444894,83.9970929 L73,84 L73,80 C81.836556,80 89,72.836556 89,64 C89,55.2686411 82.006099,48.1707953 73.3148707,48.0030364 L73,48 L73,44 Z M73,60 L73,56 C77.418278,56 81,59.581722 81,64 C81,68.3349143 77.5521622,71.8645429 73.2491793,71.9961932 L73,72 L73,68 C75.209139,68 77,66.209139 77,64 C77,61.8578046 75.3160315,60.1089211 73.1996403,60.0048953 L73,60 L73,56 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                      </g>
                  </g>
              </g>
          </svg>
          <h2 class="text-center">
            <translate translate-context="Content/Home/Paragraph">
              It’s all about the sound
            </translate>
          </h2>
          <p>
            <translate translate-context="Content/Home/Paragraph">
              Reel2Bits is an open source project that lets you upload your music, podcasts or other sounds, organize it into albums, and follow other users to see what they share.
            </translate>
          </p>
        </div>
        <div class="col-4">
          <h2>
            <translate translate-context="Content/Home/Paragraph">
              It’s huge!
            </translate>
          </h2>
          <p>
            <translate translate-context="Content/Home/Paragraph">
              Each Reel2Bits instance is a part of a biger network called Fediverse. It means that users from differnt instances can connect with each other, and even the users of other activitypub enabled platforms, like Mastodon or Pleroma can interact with Reel2Bits users.
            </translate>
          </p>
        </div>
        <div class="col-4">
          <h2>
            <translate translate-context="Content/Home/Paragraph">
              It’s opensource
            </translate>
          </h2>
          <p>
            <translate translate-context="Content/Home/Paragraph">
              Reel2Bits is an open source project, which means anybody can use, modify or tweak it however they want. Ready to dig through the code? Check out our GitHub page!
            </translate>
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-primary text-center">
      <h2 class="text-white text-center"><translate translate-context="Content/Home/Paragraph">It's simple</translate></h2>

      <div class="col-8 mx-auto">
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
        <a class="btn btn-secondary btn-lg my-4" href="#" role="button">See for yourself</a>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4 mx-auto">
          <h2 class="text-center" id="contribute">
            <translate translate-context="Content/Home/Paragraph">
              It’s currently under construction
            </translate>
          </h2>
          <p>
            <translate translate-context="Content/Home/Paragraph">
              Reel2Bits came a long way to the point it’s in now. We are still working to make Reel2Bits nice and smooth in every aspect, and with your help we can make it a lot faster. Reel2Bits is written in Python, Flask and VueJS. Feel like contributing? Check out GitHub page and documentation. Have questions? Ask them on Reel2Bits matrix channel, or email them to project maintener dashie@otter.sh
            </translate>
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-light">
      <div class="container">
        <h2 class="text-center"><translate translate-context="Content/Home/Paragraph">Get it</translate></h2>
        <div class="row">
          <div class="col-4">
            <p>
              Want to install Reel2Bits on your hosting? Check the documentation
            </p>
          </div>
          <div class="col-4">
            <p>
              Have a YunoHost? Install it from the package
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="text-center"><translate translate-context="Content/Home/Paragraph">Have questions?
Ask them in matrix channel or by email</translate></h2>
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

#r2b-white-logo {
  width: 128px;
  height: 128px;
}

.carousel-caption h3 {
  color: #fff;
}

.carousel-indicators li {
  background-color: #fff;
}
.carousel-indicators .active {
  background-color: #ffff99;
}
</style>

<script>
import PageMixin from "../PageMixin";
import WhiteLogo from "../components/WhiteLogo";


export default {
  mixins: [PageMixin],
  components: {
    WhiteLogo
  },
  computed: {
    labels() {
      return {
        slideMain: this.$pgettext(
          "Content/Home/Slide/Caption",
          "Main page with timelines"
        ),
        slideUserProfile: this.$pgettext(
          "Content/Home/Slide/Caption",
          "User profile with albums"
        ),
        slideSingleTrack: this.$pgettext(
          "Content/Home/Slide/Caption",
          "View of a single track"
        ),
        slideSingleAlbum: this.$pgettext(
          "Content/Home/Slide/Caption",
          "View of an album"
        )
      };
    }
  },
  created() {},
  methods: {}
};
</script>
