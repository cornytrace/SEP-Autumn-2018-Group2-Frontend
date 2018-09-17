<template>
  <nav class="sidebar-nav">
    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-y="scrollHandle">
    <ul class="nav">
      <template v-for="(item, index) in navItems">
        <template v-if="item.title">
          <SidebarNavTitle :key="index" :name="item.name" :classes="item.class" :wrapper="item.wrapper"/>
        </template>
        <template v-else-if="item.divider">
          <SidebarNavDivider :key="index" :classes="item.class"/>
        </template>
        <template v-else-if="item.label">
          <SidebarNavLabel :key="index" :name="item.name" :url="item.url" :icon="item.icon" :label="item.label" :classes="item.class"/>
        </template>
        <template v-else>
          <SidebarNavItem :key="index" :classes="item.class">
            <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant" @click.native="clickCallback"/>
          </SidebarNavItem>
        </template>
      </template>
    </ul>
    <slot></slot>
    </VuePerfectScrollbar>
  </nav>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import {
  SidebarNavDivider,
  SidebarNavDropdown,
  SidebarNavLink,
  SidebarNavTitle,
  SidebarNavItem,
  SidebarNavLabel
} from "@coreui/vue";
export default {
  name: "TopbarNav",
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => [],
    },
    clickCallback: Function,
  },
  components: {
    SidebarNavDivider,
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavTitle,
    SidebarNavItem,
    SidebarNavLabel,
    VuePerfectScrollbar,
  },
  data() {
    return {
      psSettings: {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX: true,
        wheelPropagation: false,
        interceptRailY: styles => ({ ...styles, height: 0, }),
      },
    };
  },
  methods: {
    goBack: function() {
      console.log("back");
    },
    scrollHandle() {},
  },
};
</script>

<style scoped lang="css">
.scroll-area {
  position: absolute;
  height: 100%;
  margin: auto;
}
</style>