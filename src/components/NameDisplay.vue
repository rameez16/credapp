<template>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Name : {{ Name }}</h5>
        <p class="card-text">
          <br />E-mail:{{ email }} <br />Address: {{ mobileNo }}<br />Phone
          No:{{ regNo }}
        </p>
        <div class="btnblock">
          <a href="#" class="btn btn-primary" id="btn1">Edit</a>
          <a href="#" class="btn btn-primary" id="btn1">Mark inactive</a>
          <a href="#" class="btn btn-secondary">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Name", "email", "mobileNo", "regNo"],
};
</script>

<style scoped>
.card-text {
  font-size: 18px;
}
.btnblock {
  display: flex;
  justify-content: space-between;
}
</style>
