<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
        <li>234234</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/mixin';
h3 {
  margin: 40px 0 0;
   font-size: px2rem(16px);
}
h1{
font-size: px2rem(16px);
}
a {
  color: #42b983;
font-size: px2rem(14px);
}
p{
    font-size: px2rem(14px);
}
li{
    font-size: px2rem(14px);
}
</style>
