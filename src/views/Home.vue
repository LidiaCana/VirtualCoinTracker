<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#6b46c1'" :size="100"/>
    <ex-assets-table v-if="!isLoading" :assets="assets"></ex-assets-table>
  </div>
</template>
<script>
import ExAssetsTable from "@/components/ExAssetsTable";
import api from "@/api";
export default {
  name: "Home",
  components: {
    ExAssetsTable
  },
  data() {
    return {
      isLoading: false,
      assets: []
    };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  }
};
</script>
