/* eslint-disable */

<template>
  <section class="form-section">
    <div class="form-container">
      <h2>Register to get a work</h2>
      <p>Attention! After successful registration and alert, update the</p>
      <p>list of users in the block from the top</p>
      <form action="" class="form">
        <label for="name">Name</label>
        <input
          type="text"
          v-model="name"
          id="name"
          placeholder="You name"
          @blur="nameValidation"
          :class="{ invalid: validation.nameValMes }"
        />
        <div v-if="validation.nameValMes" class="validation-error">
          <p>{{ validation.nameValMes }}</p>
        </div>
        <label for="email">Email</label>
        <input
          type="text"
          v-model="email"
          id="email"
          placeholder="You email"
          @blur="emailValidation"
          :class="{ invalid: validation.emailValMes }"
        />
        <div v-if="!validation.emailVal" class="validation-error">
          <p>{{ validation.emailValMes }}</p>
        </div>
        <label for="phone">Phone number</label>
        <input
          type="text"
          v-model="phoneNumber"
          id="phone"
          placeholder="+380 XX XXX XX XX"
          @blur="phoneNumberValidation"
          :class="{ invalid: validation.phoneNumberValMes }"
        />
        <div v-if="!validation.phoneNumberVal" class="validation-error">
          <p>{{ validation.phoneNumberValMes }}</p>
        </div>
        <div v-if="!validation.phoneNumberValMes">
          <p>Enter phone number in open format</p>
        </div>
        <p class="position-header">Select your position</p>
        <div
          class="select"
          v-for="(position, index) in fetchedPosition"
          :key="index"
        >
          <label :for="position.id" class="radio">
            <input
              type="radio"
              v-model="selectedPosition"
              name="position"
              :value="position.id"
              :id="position.id"
            />
            <span>{{ position.name }}</span>
          </label>
        </div>
        <div>
          <p class="photo-header">Photo</p>
          <label
            for="file-upload"
            class="file-upload"
            :class="{ invalid: validation.photoValMes }"
          >
            <div
              class="file-upload__text "
              :class="filename != 'Upload you photo' ? 'black' : ''"
            >
              {{ filename }}
            </div>
            <div class="file-upload__button">Browse</div>
            <input
              id="file-upload"
              type="file"
              @change="uploadFile"
              ref="myFiles"
            />
          </label>
        </div>
        <div v-if="!validation.photoVal" class="validation-error">
          <p>{{ validation.photoValMes }}</p>
        </div>
        <div class="button" @click="validateAll">
          <!-- <a href="#">Sign up now</a> -->
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      selectedPosition: 1,
      photo: "",
      filename: "Upload you photo",
      token: "",
      validation: {
        nameVal: "",
        nameValMes: "",
        emailVal: "",
        emailValMes: "",
        phoneNumberVal: "",
        phoneNumberValMes: "",
        photoVal: "",
        photoValMes: ""
      }
    };
  },
  computed: {
    ...mapGetters({ fetchedPosition: "positions" })
  },
  methods: {
    ...mapActions({ fetchUserPositions: "fetchUserPositions" }),
    uploadFile(event) {
      this.filename = event.target.files[0].name;
      this.photo = event.target.files[0];
      this.uploadFileValidation();
    },
    nameValidation() {
      this.validation.nameVal = this.name.length >= 2 && this.name.length <= 60;
      if (!this.validation.nameVal) {
        this.validation.nameValMes = "This field must be filled";
        this.validation.nameVal = false;
      } else {
        this.validation.nameValMes = "";
        this.validation.nameVal = true;
      }
    },
    emailValidation() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.validation.emailVal = false;
      if (this.email == "") {
        this.validation.emailValMes = "This field must be filled";
      } else if (!regex.test(this.email)) {
        this.validation.emailValMes = "Enter valid email";
      } else if (this.email.length > 100) {
        this.validation.emailValMes = "Enter valid email";
      } else {
        this.validation.emailValMes = "";
        this.validation.emailVal = true;
      }
    },
    phoneNumberValidation() {
      const regex = /^[\+]{0,1}380([0-9]{9})$/; //eslint-disable-line
      this.validation.phoneNumberVal = false;
      if (this.phoneNumber == "") {
        this.validation.phoneNumberValMes = "This field must be filled";
      } else if (!regex.test(this.phoneNumber)) {
        this.validation.phoneNumberValMes = "Enter valid phone number";
      } else {
        this.validation.phoneNumberValMes = "";
        this.validation.phoneNumberVal = true;
      }
    },
    uploadFileValidation() {
      this.validation.photoVal = false;
      if (this.photo == "") {
        this.validation.photoValMes = "Upload you photo";
      } else {
        const tempAr = this.filename.split(".");
        const extention = tempAr[tempAr.length - 1];
        if (extention != "jpeg" && extention != "jpg") {
          this.validation.photoValMes = "You can upload only jpeg/jpg file";
        } else if (this.photo.size > 5000000) {
          this.validation.photoValMes = "Maximum size 5mb";
        } else {
          this.validation.photoValMes = "";
          this.validation.photoVal = true;
        }
      }
    },
    validateAll() {
      this.nameValidation();
      this.emailValidation();
      this.phoneNumberValidation();
      this.uploadFileValidation();
      if (
        this.validation.nameVal &&
        this.validation.emailVal &&
        this.validation.phoneNumberVal &&
        this.validation.photoVal
      ) {
        this.sendData();
      } else console.log(false);
    },
    sendData() {
/*       let formData = {
        position_id: this.selectedPosition,
        name: this.name,
        email: this.email,
        phone: this.phoneNumber,
        photo: this.photo
      }; */
      
      let formData = new FormData();
      formData.append("position_id", this.selectedPosition);
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("phone", this.phoneNumber);
      formData.append("photo", this.photo);

      this.$http
        .get("token")
        .then(response => response.json())
        .then(fetchToken => {
          console.log(fetchToken);
          this.$http
            .post("users", formData, { headers: {'Token': fetchToken.token} })
            .then(response => response.json())
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.fetchUserPositions();
  }
};
</script>

<style scoped>
.file-upload__text.black {
  color: #000000;
}

.redBorder {
  border: 1px solid red;
}
.button {
  margin: 3.7rem auto;
}
</style>
