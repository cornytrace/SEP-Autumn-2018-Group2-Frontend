<template>
    <div class="content">
        <b-list-group>
            <b-list-group-item v-for="user in users_list" :key="user.name">{{ user.name }} {{ user.email }}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
    },
  },
  data() {
    return {
      users_list: [
        { name: "test1", email: "test1@test.nl", },
        { name: "test2", email: "test2@test.nl", },
        { name: "test3", email: "test3@test.nl", },
        { name: "test4", email: "test4@test.nl", },
        { name: "test2", email: "test2@test.nl", },
        { name: "test3", email: "test3@test.nl", },
        { name: "test4", email: "test4@test.nl", },
        { name: "test2", email: "test2@test.nl", },
        { name: "test3", email: "test3@test.nl", },
        { name: "test4", email: "test4@test.nl", },
        { name: "test2", email: "test2@test.nl", },
        { name: "test3", email: "test3@test.nl", },
        { name: "test4", email: "test4@test.nl", },
        { name: "test2", email: "test2@test.nl", },
        { name: "test3", email: "test3@test.nl", },
        { name: "test4", email: "test4@test.nl", },
        { name: "test2", email: "test2@test.nl", },
        { name: "test3", email: "test3@test.nl", },
        { name: "test4", email: "test4@test.nl", },
        { name: "test2", email: "test2@test.nl", },
        { name: "test3", email: "test3@test.nl", },
        { name: "test4", email: "test4@test.nl", },
        { name: "test2", email: "test2@test.nl", },
        { name: "test3", email: "test3@test.nl", },
        { name: "test4", email: "test4@test.nl", },
        { name: "test2", email: "test2@test.nl", },
        { name: "test3", email: "test3@test.nl", },
        { name: "test4", email: "test4@test.nl", },
      ],
    };
  },
};
</script>

<style>
.content {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>