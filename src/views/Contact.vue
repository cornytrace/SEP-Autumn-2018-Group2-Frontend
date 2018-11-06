<template>
  <div class="animated fadeIn">
    <b-row class="begin-text">
      <b-col sm="12">
        <b-card class="border-0">
          <h1>It is easy to contact us, try it!</h1>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" md="6" lg="6">
        <b-card class="bg" no-body>
          <b-card-header class="border-contact header-text">
            <h2>Contact</h2>
          </b-card-header>
          <b-card-body>
            <form>
              <div class="text-color">
                <h6>Firstname</h6>
              </div>
              <input class="form" type="text" name="firstname"><br><br>
              <div class="text-color">
                <h6>Lastname</h6>
              </div>
              <input class="form" type="text" name="lastname"><br><br>
              <div class="text-color">
                <h6>Email adress</h6>
              </div>
              <input class="form" type="email" name="email"><br><br>
              <div class="text-color">
                <h6>Message</h6>
              </div>
              <textarea class="form" name="message" cols="30" rows="7"></textarea><br><br>
              <input class="text-color" type="button" value="Send" onclick="alert('Sending not yet implemented!')">
            </form>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="6" md="6" lg="6">
        <b-card class="bg" no-body>
          <b-card-header class="border-contact header-text">
            <h2>Details</h2>
          </b-card-header>
          <b-card-body class="border-contact">
            <div class="text-color">
              <h6>
                Den Dolech 2 <br>
                5612 AZ Eindhoven <br>
                The Netherlands <br><br>
                Email: <a href="dashit@dashit.com">dashit@dashit.com</a><br>
                Phone: (0031) (0) 6 87654321
              </h6>
            </div>
          </b-card-body>
          <b-card-body class="border-contact border-top">
            <div class="align-icons">
              <img id="cursor-change" src="../../public/img/social/fbicon.png" alt="Facebook" class="icons-style" onclick="alert('Facebook not yet implemented!')">
              <img id="cursor-change" src="../../public/img/social/twicon.png" alt="Twitter" class="icons-style" onclick="alert('Twitter not yet implemented!')">
              <img id="cursor-change" src="../../public/img/social/instaicon.png" alt="Instagram," class="icons-style" onclick="alert('Instagram not yet implemented!')">
            </div>
            <div>
              <img src="../../public/img/logo.svg" alt="DASH-IT" class="logo-style">
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// No script static page.
export default {
  name: "Contact",
};
</script>

<style scoped>
.begin-text {
  text-align: center;
}

.header-text {
  text-align: left;
}

.form {
  width: 100%;
}

.icons-style {
  width: 50px;
  height: 50px;
  margin: 10px;
}

.align-icons {
  text-align: center;
}

.logo-style {
  width: 100%;
  margin-top: 20px;
  margin-left: 0pt;
}

#cursor-change {
  cursor: pointer;
}
</style>
