<template>
  <div class="hello">
    <h1>Welcome to Your Vue.js App - About Page</h1>
    <h2>Name: {{url_name}}</h2>
    <nav>
      <router-link to="/">User</router-link>
      <router-link to="/organization">Org</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  },
  data() {
    return {
      url_name: this.$route.params.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
