<template>
  <section>
    <div v-for="(formulario, key, index) in formularios" :key="index">
      <div v-for="(campo, nome, index) in formulario" :key="index">
        <p>{{ nome }}</p>
        <p>{{ campo }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "dadosCadastrados",
  data() {
    return {
      formularios: "",
    };
  },
  methods: {
    pegarFormularios() {
      this.formularios = this.$store.state.formularios;
    },
  },
  created() {
    this.formularios = this.$store.state.formularios;
  },
};
</script>

<style></style>
