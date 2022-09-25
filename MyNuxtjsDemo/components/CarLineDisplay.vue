<template>
  <div>
    <h4 class="header">トヨタ車ラインアップ</h4>
    <v-banner
      single-line
      :sticky="sticky">
      ※ 全て税込表示です<br />
      ※ 新型コロナウイルス感染拡大等に伴う部品供給不足により、現在表記されている納期より＋1ヶ月程度のお時間がかかる場合がございます
    </v-banner>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header {
    font-size: 1.15rem;
    margin-top: 0.4rem;
  }
</style>
