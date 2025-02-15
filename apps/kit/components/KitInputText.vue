<script lang="ts" setup>
const input = ref("");
const input2 = ref("hello");

const trailingButtonFunction = () => {
  alert("hello");
};

const clear = () => {
  input.value = "";
};
</script>

<template>
  <KitWrapper class="flex-col">
    <UIAtInputText
      v-model="input"
      placeholder="Type some text"
      label="Some text field"
      name="my_text_field_1"
    />
    <UIAtInputText
      v-model="input2"
      placeholder="Type some text"
      label="Some text field"
      name="my_text_field_2"
    />
    <UIAtInputText
      v-model="input"
      placeholder="The label is hidden"
      trailingButtonIconPath="cross"
      label="Some text field"
      name="my_text_field_4"
      :trailingButtonFunction="clear"
      :hideLabel="true"
    />
    <UIAtInputText
      v-model="input2"
      placeholder="Type some text"
      trailingButtonIconPath="arrow-down-circle"
      label="Some text field"
      name="my_text_field_5"
      :trailingButtonFunction="trailingButtonFunction"
    />
    <UIAtInputTextArea
      v-model="input2"
      placeholder="type a lot of text in this area"
      trailingButtonIconPath="arrow-down-circle"
      label="Some text field"
      name="my_text_field_5"
    />
  </KitWrapper>
</template>
