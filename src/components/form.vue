<template>
  <div>
    <b-form
      @submit="updateNameList(form)"
      @reset="onReset"
      v-if="show"
      id="form"
    >
      <b-form-group id="input-group-1" label="Student Name" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Student Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Student Email"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Enter E-mail"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Address" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.Address"
          placeholder="Enter Address"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="phone No" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.mobileNo"
          placeholder="Enter phone no"
          required
        ></b-form-input>
      </b-form-group>

      <b-button variant="primary" @click="updateNameList(form)" class="btn1"
        >Submit</b-button
      >
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
      <b-button variant="secondary" @click="showCard" class="btn1"
        >Show/Hide student details</b-button
      >
    </b-form>
    <div v-if="bool">
      <div v-for="(item, index) in $store.state.formdata" :key="index">
        <b-card class="mt-3" header="Form Data Result">
          <pre
            class="m-0"
          ><NameDisplay :name="item.name" :email="item.email" :mobileNo="item.Address" :regNo="item.mobileNo"   >
        </NameDisplay>
      </pre>
        </b-card>

        <!-- <p>{{ $store.state.formdata }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
//import { mapMutations } from "vuex";
import NameDisplay from "../components/NameDisplay";
import { mapState, mapActions } from "vuex";
/* let name = this.$store.getters.NAME
console.log(name) */
export default {
  components: {
    NameDisplay,
  },

  data() {
    return {
      form: {
        email: "",
        name: "",
        mobileNo: "",
        Address: "",
        regNo: "",
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
      bool: false,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    ...mapActions(["updateNameList"]),

    showCard(event) {
      event.preventDefault();
      console.log("ramees");
      this.bool = !this.bool;
      console.log(this.bool);
    },
    //...mapMutations(["updateNameList"]),

    /* ...mapState(["formdata"]),
    ...mapActions(["updateNameList"]), */
  },
  computed: {
    ...mapState(["formdata"]),
  },
};
</script>

<style scoped>
.btn1 {
  margin-top: 20px;
  margin-right: 20px;
}
#form {
  margin-top: 40px;
}
</style>
