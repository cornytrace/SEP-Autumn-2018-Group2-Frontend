<template>
    <div class="content">
        <b-list-group>
            <b-list-group-item v-for="user in users" :key="user.pk">{{ user.email }}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
  name: "AdminHome",
  props: ['users',],
  data: function() {
    return {}
  },
};
</script>

<style>
.content {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>