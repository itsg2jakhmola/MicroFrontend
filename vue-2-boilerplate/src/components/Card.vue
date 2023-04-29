<template>
  <div class="card">
    <h4 v-if="hasSlot('header')" :class="classNamesHeader">
      <slot name="header" />
    </h4>
    <div v-if="hasSlot('body')" class="card-body">
      <slot name="body" />
    </div>
    <div v-if="hasSlot('footer')" class="card-footer">
      <slot name="footer" />Gone
      <dms></dms>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

import SlotMixin from "@/mixins/slot";
import dms from "dms/HelloWorld.vue";
export default {
  name: "Card",

  mixins: [SlotMixin],

  props: {
    contextualStyle: {
      default: "primary",
      type: String,
      required: false,
    },
  },
  components: {
    dms,
  },
  /**
   * The computed properties that the component can use.
   */
  computed: {
    /**
     * Computed property which will compute the classes
     * for the header of the card.
     *
     * @returns {Array} The classes for the header.
     */
    classNamesHeader() {
      const classNames = ["card-header"];

      if (this.contextualStyle) {
        classNames.push(`bg-${this.contextualStyle}`);
        classNames.push("text-white");
      } else {
        classNames.push("bg-default");
      }

      return classNames;
    },
  },
};
</script>
