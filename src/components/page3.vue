<template>
  <div>
    <h2>[ page3.vue ]</h2>
    <p>
      ここはページ3です。
    </p>
    <router-link to="/">Go to page1</router-link><br />
    <br />
    こんにちは {{ name }}.<br />
    <HR />
  </div>
</template>

<script>
export default{
  data () {
    return {
      name: 'World 355A',
      message: 'msg, 123',
      counter: 0,
      list: ['Apple', 'Banana', 'Strawberry']
    }
  },
  methods: {
    addItem: function () {
      this.list.push('Orange' + (++this.counter).toString())
    }
  }
}
</script>

<style>
</style>
