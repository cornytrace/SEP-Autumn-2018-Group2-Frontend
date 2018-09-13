<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="8" lg="6">
        <b-card no-body header="Video 1" class="bg">
          <b-card-body class="pb-0">
            <b-card no-body class="bg-primary">
              <b-card-header>
                Video stat 1
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Data Video stat 1</p>
              </b-card-body>
            </b-card>
          </b-card-body>
        </b-card>
        <b-card no-body header="Video 2" class="bg">
          <b-card-body class="pb-0">
            <b-card no-body class="bg-primary">
              <b-card-header>
                Video stat 2
              </b-card-header>
              <b-card-body class="pb-0">
                <p>Data Video stat 2</p>
              </b-card-body>
            </b-card>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Videos",
};
</script>