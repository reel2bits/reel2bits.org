<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <h2>
          <i class="fa fa-send-o"></i>&nbsp;
          <translate translate-context="Content/Contact/Header"
            >Contact informations</translate
          >
        </h2>
        <p>
          <translate translate-context="Content/Contact/Paragraph"
            >Our main communication canal is our Matrix channel, the following
            channels are available:</translate
          >
        </p>
        <b-table-lite :items="channels" :fields="channelsFields">
          <template v-slot:cell(link)="link">
            <a :href="link.value" target="_blank">{{ link.value }}</a>
          </template>
        </b-table-lite>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <h2>
          <i class="fa fa-send-o"></i>&nbsp;
          <translate translate-context="Content/Contact/Header"
            >Other requests and messages</translate
          >
        </h2>
        <p>
          <translate translate-context="Content/Contact/Paragraph">
            If you need to get in touch with core contributors of the project,
            use the contact information below.
          </translate>
        </p>

        <b-table :items="contacts" :fields="contactsFields">
          <template v-slot:cell(mail)="mail">
            <a :href="mailto(mail.value)" target="_blank">{{ mail.value }}</a>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
div.section {
  margin-bottom: 4em;
}
</style>

<script>
import PageMixin from "../PageMixin";

export default {
  mixins: [PageMixin],
  methods: {
    getInnerTitle() {
      return this.$pgettext("Content/Contact/Header", "Contact");
    },
    mailto(mail) {
      return `mailto:${mail}`;
    }
  },
  data() {
    return {
      channelsFields: [
        {
          key: "name",
          label: this.$pgettext("Content/Contact/Table/Header", "Name")
        },
        {
          key: "link",
          label: this.$pgettext("Content/Contact/Table/Header", "Link")
        },
        {
          key: "purpose",
          label: this.$pgettext("Content/Contact/Table/Header", "Purpose")
        }
      ],
      channels: [
        {
          name: "#reel2bits:otter.sh",
          link: "https://riot.im/app/#/room/#reel2bits:otter.sh",
          purpose: this.$pgettext(
            "Content/Contact/Table/Header",
            "Main community and dev canal"
          )
        }
      ],
      contactsFields: [
        {
          key: "name",
          label: this.$pgettext("Content/Contact/Table/Header", "Name")
        },
        {
          key: "roles",
          label: this.$pgettext("Content/Contact/Table/Header", "Roles")
        },
        {
          key: "mail",
          label: this.$pgettext("Content/Contact/Table/Header", "Mail")
        },
        {
          key: "lang",
          label: this.$pgettext("Content/Contact/Table/Header", "Language")
        }
      ],
      contacts: [
        {
          name: "Dashie",
          roles: this.$pgettext(
            "Content/Contact/Table/Header",
            "Project maintainer"
          ),
          mail: "dashie@otter.sh",
          lang: "french, english"
        }
      ]
    };
  }
};
</script>
