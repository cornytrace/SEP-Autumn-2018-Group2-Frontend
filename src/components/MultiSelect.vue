<template>
  <div class="content-container">
    <div class="selector-container">
      <h4>{{optionsTitle}}</h4>
      <b-input v-model="search1" id="options-search" placeholder="search"></b-input>
      <b-form-select :text-field="tf" :value-field="vf" class="selector" v-model="selectedOptions" multiple :select-size="4" :options="nonSelectedOptions">
      </b-form-select>
    </div>
    <div class="button-container">
      <b-button @click="moveRight" id="move-right-button"><i class="cui-arrow-right" /> </b-button>
      <b-button @click="moveLeft" id="move-left-button"><i class="cui-arrow-left" /> </b-button>
    </div>
    <div class="selector-container">
      <h4>{{selectedTitle}}</h4>
      <b-input v-model="search2" id="selected-search" placeholder="search"></b-input>
      <b-form-select :text-field="tf" :value-field="vf" class="selector" v-model="selectedSelected" multiple :select-size="4" :options="filteredRight">
      </b-form-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiSelect",
  data: function() {
    return {
      selectedOptions: [],
      selectedSelected: [],
      // selectedData: this.selected,
      search1: "",
      search2: "",
      selected: this.value,
    };
  },
  props: {
    optionsTitle: {
      type: String,
      default: "Options",
    },
    selectedTitle: {
      type: String,
      default: "Selected",
    },
    vf: "",
    tf: "",
    options: {
      type: Array,
    },
    value: {
      type: Array,
      default() {
        return new Array();
      },
    },
  },
  watch: {
    value() {
      this.selected = this.value;
    },
  },
  methods: {
    moveRight() {
      // Move the selected items to selected
      for (let option of this.selectedOptions) {
        let item = this.options.find(x => x[this.vf] === option);
        this.selected.push(item);
      }
      // Reset selected values for both lists
      this.selectedOptions = [];
      this.selectedSelected = [];
      this.$emit("input", this.selected);
    },
    moveLeft() {
      // Remove the selected items from the selected list.
      for (let s of this.selectedSelected) {
        let item = this.selected.find(x => x[this.vf] === s);
        var value = this.vf;
        this.selected = this.selected.filter(function(el) {
          return el[value] !== item[value];
        });
      }
      // Reset selected values for both lists
      this.selectedOptions = [];
      this.selectedSelected = [];
      this.$emit("input", this.selected);
    },
    hasValue(array, value) {
      for (let item of array) {
        if (item[this.vf] === value) {
          return true;
        }
      }
      return false;
    },
  },
  computed: {
    filteredRight() {
      var text = this.tf;
      return this.selected.filter(el => el[text].toLowerCase().includes(this.search2.toLowerCase())
      );
    },
    nonSelectedOptions() {
      return this.options.filter(
        el => !this.hasValue(this.selected, el[this.vf]) &&
          el[this.tf].toLowerCase().includes(this.search1.toLowerCase())
      );
    },
  },
};
</script>

<style>
.content-container {
  width: 100%;
}
.button-container {
  width: 10%;
  display: inline-block;
}
.button-container button {
  margin-left: 10%;
  margin-bottom: 10px;
  width: 80%;
}

.selector-container {
  width: 45%;
  display: inline-block;
}
.selector-container input {
  margin-bottom: 10px;
}
.selector-container h4 {
  font-size: 1rem;
}
</style>

