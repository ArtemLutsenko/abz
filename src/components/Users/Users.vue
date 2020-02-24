<template>
  <section class="users">
    <div class="container">
      <h2>Our cheerful users</h2>
      <p>Attention! Sorting users by registration date</p>
      <div class="users-container">
              <app-user v-for="(user, index) in users" :key = index :user = "user"></app-user>
      </div>   
      <div class="button users-button" @click.prevent="getMore" :class="{hidden : buttonShow}"><a href="#" >Show more</a></div>   
    </div>
  </section>
</template>

<script>
import User from './User'
import { mapActions } from "vuex";
import {mapGetters} from 'vuex'
export default {

  components:{
    appUser: User
  },
  created(){
    this.fetchUsers()
     
  },
  computed:{
    ...mapGetters({users: "users", total_users: "total_users", page:"page"}),
    buttonShow(){
      let result = this.total_users <= (this.page * 6)
      return result
    }
  }
  ,
  methods:{
    ...mapActions({fetchUsers: "fetchUsers", increasePage:"increasePage"}),
    getMore(){
      this.increasePage()
      this.fetchUsers()
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
