<template>
  <button
    :display="display"
    :mobile="mobile"
    :class="classList"
    type="button"
    @click="asideToggle">
    <span class="icon-bell" />
    <span class="badge badge-pill badge-danger">{{ notificationCount }}</span>
  </button>
</template>

<script>
import {
  asideMenuCssClasses,
  validBreakpoints,
  checkBreakpoint
} from "../../shared/classes";
import toggleClasses from "../../shared/toggle-classes";
export default {
  name: "NotificationToggler",
  props: {
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    display: {
      type: String,
      default: "",
    },
    mobile: {
      type: Boolean,
      default: false,
    },
    notificationCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    classList() {
      return ["navbar-toggler",];
    },
  },
  methods: {
    toggle(force) {
      const [display, mobile,] = [this.display, this.mobile,];
      let cssClass = asideMenuCssClasses[0];
      if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
        cssClass = `aside-menu-${display}-show`;
      }
      toggleClasses(cssClass, asideMenuCssClasses, force);
    },
    asideToggle(e) {
      e.preventDefault();
      this.toggle();
    },
  },
};
</script>