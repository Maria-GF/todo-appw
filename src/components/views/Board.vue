<template>
    <section>
        <!--name es una propiedad que estoy pasando del otro componente y gracias al props del -->
        <h3><span>Mis Paneles</span> ▸ {{ name }}</h3>
        <div>...</div>
    </section>
</template>

<script>
export default {
  name: 'board-view',
  components: {},
  props: {
    name: String,
    id: String
  }
}
</script>

<style scoped>
section{
 text-align: left;
}
h3{
    color: #37474f;
    text-align: left;
    margin: 1.5rem
}
h3 span {
    color: #546e7a;
}
</style>
