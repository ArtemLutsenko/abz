
<template>
  <div>
    <app-header />
    <app-banner />
    <app-about-me />
    <app-users />
    <app-form />
    <app-footer />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe/AboutMe'
import Banner from './components/Banner/Banner'
import Form from './components/Form/Form'
import Footer from './components/Header Footer/Footer'
import Header from './components/Header Footer/Header'
import Users from './components/Users/Users'
export default {
  components:{
    appAboutMe: AboutMe,
    appBanner: Banner,
    appForm: Form,
    appHeader: Header,
    appFooter: Footer,
    appUsers: Users
  }
}
</script>

<style>

</style>