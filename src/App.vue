<template>
  <div id="vue">
    <likvido-input id="input" @input="inputValue = $event.target.value">
      <label slot="label">Likvido Input in Vue</label>
    </likvido-input>

    <p>Input value: {{ inputValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style scoped>
#vue {
  margin-top: 30px;
}
</style>
