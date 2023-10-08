<template>
  <div class="card">
    <Splitter class="mb-5 min-h-screen">
      <SplitterPanel :size="25" :minSize="10">
        <Editor v-model="text" editorStyle="" />
      </SplitterPanel>
      <SplitterPanel class="m-5" :size="75">
        <div v-html="preview"></div>
      </SplitterPanel>
    </Splitter>
  </div>
 </template>

<script>
export default {
  data() {
    return {
      inputText: "",
      preview: "",
    };
  },
  methods: {
    updatePreview() {
      this.preview = this.text;
    },
  },
};
</script>
