<!-- 
 This component converts the reset token delivered as a URL parameter to a store variable.
 This is to prevent the reset token being leaked in the REFERRER header if the user visits another website.
-->
<template>
  <p>Referrer page</p>
</template>

<script>
export default {
  beforeMount: function() {
    this.$store.commit("setResetToken", this.$route.params.token);
    this.$store.commit("setResetId", this.$route.params.id);
    this.$router.push("/pages/resetpassword");
  },
};
</script>
