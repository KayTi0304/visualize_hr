<template>
  <div
    class="h-screen bg-gradient-to-br from-blue-300 via-pink-300 to-indigo-500"
    style="overflow: auto"
  >
    <div class="text-left text-white text-7xl font-sans font-bold p-3">
      Add Modules
    </div>
    <button
      class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
      :on-click="addOneModule()"
    >
      Add
    </button>
    <div v-if="addYes">
      <input
        type="text"
        id="create-module"
        v-model="name"
        placeholder="Module Name"
        class="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-b border-white placeholder:text-white"
      />
      <input
        type="text"
        id="create-module"
        v-model="name"
        placeholder="Module Description"
        class="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-b border-white placeholder:text-white"
      />
    </div>
    <p class="error" v-if="error">{{ error }}</p>
    <button
      class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
      v-on:click="goBack()"
    >
      Go Back
    </button>
  </div>
</template>

<script>
import CompanyService from "../CompanyService";
export default {
  name: "ModuleComponent",
  data() {
    return {
      company: {},
      modules: [],
      addYes: false,
      error: "",
      text: "",
    };
  },
  async created() {
    this.company = CompanyService.getCompanyById(this.$route.params.id);
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    addOneModule() {
      this.addYes = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
