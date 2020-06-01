<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p>
      Cloud Foundry 의 Static Web 제작 설명을 위한 샘플 프로그램입니다. 자세한 설명은 다음 링크를 참조하시기 바랍니다. 
    </p>
    <p>
      <a href="https://docs.kpaasta.io/dev/static" target="_blank" rel="noopener"> 정적 웹 앱 제작가이드 </a>
    </p>
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
