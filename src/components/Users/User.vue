<template>
  <div class="user">
      <div class="user-photo" :style="{backgroundImage: `url('${user.photo}')`}"></div>
      <div class="user-name">{{user.name}}</div>
      <div class="user-position" >{{user.position}}</div>
      <div class="user-email" :data-text="user.email">{{user.email}}</div>
      <div class="user-phone">{{user.phone}}</div>
  </div>
</template>

<script>

export default {
props:["user"],

}
</script>

<style>

</style>