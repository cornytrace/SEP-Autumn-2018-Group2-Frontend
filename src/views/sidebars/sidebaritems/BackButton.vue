<template>
  <button class="backbutton" type="button" @click="callback"><span v-if="!minimized" class="backbutton-text">Back</span><i class="fa fa-level-up nav-icon"></i></button>
</template>
<script>
export default {
  name: "sidebar-minimizer",
  methods: {},
  props: {
    callback: function() {},
    minimized: false,
  },
};
</script>

<style>
.backbutton {
  position: relative;
  -ms-flex: 0 0 50px;
  flex: 0 0 50px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
}

.backbutton i {
  display: inline-block;
  color: #fff;
  widows: 1.09375rem;
  font-size: 1.2rem;
}

.backbutton-text {
  color: #fff;
  margin-right: 10px;
  font-size: 1rem;
}

.backbutton .backbutton-text {
  display: inline;
}

.sidebar-minimized .backbutton .backbutton-text {
  display: none;
}
</style>

