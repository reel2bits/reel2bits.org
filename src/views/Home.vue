<template>
  <div>
    <div class="row justify-content-md-center">
      <div class="col-md-8">
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
    </div>
    <div class="row justify-content-md-center">
      <div class="col-md-8">
        <hr />
        <p>
          <translate translate-context="Content/Home/Paragraph">
            reel2bits is an open source web application dedicated to artists,
            music makers and podcast authors.
          </translate>
        </p>
        <p>
          <translate translate-context="Content/Home/Paragraph">
            reel2bits allows you to upload your tracks, albums, and even create
            Atom Podcast feed from an album.
          </translate>
        </p>
        <p>
          <translate translate-context="Content/Home/Paragraph">
            Every user profile has Atom feeds for all tracks and single
            albums, making sharing easier.
          </translate>
        </p>
        <p>
          <translate translate-context="Content/Home/Paragraph">
            Recently, we started working on ActivityPub implementation, creating
            a way to easily reach even more people in the Fediverse.
          </translate>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.carousel-caption h3 {
  color: #313df2;
  text-shadow: 1px 1px 2px #313df2;
}

.carousel-indicators li {
  background-color: #0000ff;
  box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.carousel-indicators .active {
  background-color: #ffff99;
}
</style>

<script>
import PageMixin from "../PageMixin";

export default {
  mixins: [PageMixin],
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
