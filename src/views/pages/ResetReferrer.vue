<template>
  <p>Referrer page</p>
</template>

<script>
export default {
  beforeMount: function() {
    console.log(this.$route.params.token);
    this.$store.commit("setResetToken", this.$route.params.token);
    this.$store.commit("setResetId", this.$route.params.id);
    this.$router.push("/pages/resetpassword");
  },
};
</script>
