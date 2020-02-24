<template>
  <section class="form-section">
    <div class="form-container">
      <h2>Register to get a work</h2>
      <p>Attention! After successful registration and alert, update the</p>
      <p>list of users in the block from the top</p>
      <form action="">
        <div>
          <label for="name">Name</label>
          <input type="text" v-model="name" id="name" placeholder="You name"/>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="text" v-model="email" id = "email" placeholder="You email"/>
        </div>
        <div>
          <label for="phone">Phone number</label>
          <input type="text" v-model="phoneNumber" id="phone" placeholder="You email"/>
        </div>
        <div class="select" v-for="(position, index) in fetchedPosition" :key=index>
          <input type="radio" v-model = "selectedPosition" name="position" :value="position.name" :id = "position.name">
          <label :for="position.name">{{position.name}}</label>
          
        </div>
        <div>
          <label for="photo">Photo</label>
          <input
            type="file"
            id="file"
            ref="myFiles"
            class="custom-file-input"
            @change="previewFiles"
          />
        </div>
        <div class="button"><a href="#">Sign up now</a></div>
      </form>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      selectedPosition: "",
      photo: ""
    };
  },
  computed:{
    ...mapGetters({fetchedPosition: "positions"})
  },
  methods: {
    ...mapActions({ fetchUserPositions: "fetchUserPositions" }),
    previewFiles() {
      this.photo = this.$refs.myFiles.files;
      console.log(this.photo);
    }
  },
  created() {
    this.fetchUserPositions();
  }
};
</script>

<style></style>
