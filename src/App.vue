<script setup>



</script>

<template>
  <div style="max: width 720px;margin:2rem auto;padding:1rem">
    <header style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
      <h1 style="font: size 20px;margin:0;">Ecommerce Frontend</h1>
    </header>
  </div>


    <router-view></router-view>
  
</template>

<style scoped>
button {
  padding: .5rem 1rem; 
  border: orangered 1px solid;
  border-radius: 8px;
  width: 100%;
}
input {
  padding: .6rem .7rem;
  border: orangered 1px solid;
  border-radius: 8px;
  width: 100%;
}
label {
  display: block;
  margin: .5rem 0 .25rem; font-weight: 600;
}
.form-card {
  border: 1px solid #148759;
  border-radius: 8px;
  padding: 1rem;
  max-width: 400px;
  margin: auto;
}
.row {
  display: grid;
  gap:.75rem
}
</style>
