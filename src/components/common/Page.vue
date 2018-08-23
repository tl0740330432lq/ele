<template>
<div class="page" ref="page">
    <div class="page-wrap">

        <slot/>

    </div>
    
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.page{
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  height: 100%;  
  overflow-x: hidden;
}
</style>
