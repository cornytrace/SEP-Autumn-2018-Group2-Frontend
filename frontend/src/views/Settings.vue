<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="8" lg="6">
        <b-card header="Settings" class="bg">

          <!-- Checkbox example -->
          <b-form-checkbox id="checkbox1" v-model="status" value="accepted" unchecked-value="not_accepted">
            I accept the terms and use
          </b-form-checkbox>

          <!-- Multiple checkboxes -->
          <b-form-group label="Stacked  checkboxes">
            <b-form-checkbox-group stacked v-model="selected" name="flavour2" :options="options">
            </b-form-checkbox-group>
          </b-form-group>

        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [{
            text: 'Value 1',
            value: '1'
          },
          {
            text: 'Value 2',
            value: '2'
          },
          {
            text: 'Value 3',
            value: '3'
          },
        ]
      }
    }
  }

</script>
