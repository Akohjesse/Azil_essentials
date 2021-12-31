<template>
  <button>{{text}}</button>
</template>

<script>
export default {
name: 'Button',
props:['text']
}
</script>

<style lang="scss" scoped>
 button{
     border: none;
     padding:18px 20px;
     outline: none;
     background: rgb(158, 158, 158);
     color: white;
     font-family: Voyage;
     font-size: 1em;
 }
</style>