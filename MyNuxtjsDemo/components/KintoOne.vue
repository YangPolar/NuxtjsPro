<template>
  <v-container fluid>
    <h4 class="header">KINTO ONEの魅力</h4>
    <p class="snippet">マイカーにかかる費用がコミコミ&定額<br>WEBで申し込んだ後は販売店で受け取るだけ
      手続き関係は気にしなくてOK<br>
      年齢・運転者に制限なし充実の自動車保険</p>
    <!--<button class="button btn">契約プラン</button>-->
    <v-btn
      class="button"
      color="rgb(0, 112, 141)"
      nuxt
      to="/inspire"
    >
      契約プラン
    </v-btn>
    <v-img v-bind:src="require('/assets/images/kv_02@2x.jpg')"></v-img>
    <!--<img src="~/assets/images/kv_02@2x.jpg">-->
  </v-container>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .Hero {
    height: 50vh;
    position: relative;
    display: flex;
    padding: 5rem 0;
    align-items: flex-start;
    justify-content: space-between;
  }
  .text-container {
    width: 90%;
    margin-top: 4rem;
  }
  .header {
    font-weight: 900;
    font-size: 5rem;
  }
  .snippet {
    color: grey;
    font-size: 1.25rem;
  }
  .image {
    width: 27.5rem;
    margin-top: 2rem;
  }
  .overlay {
    background: rgba(0, 0, 0, 0);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .button {
    padding: 1rem 4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 100rem;
    background-color: rgb(0, 112, 141);
    color: white;
    width: 20rem;
    font-weight: 700;
    transition: 0.5s;
  }
  .button:hover {
    width: 21.5rem;
  }
  @media (max-width: 500px) {
    .Hero {
      height: 40vh;
    }
  }
</style>
