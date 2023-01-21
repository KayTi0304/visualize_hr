<template>
  <div
    class="h-screen bg-gradient-to-br from-blue-300 via-pink-300 to-indigo-500"
    style="overflow: auto"
  >
    <div class="text-left text-white text-7xl font-sans font-bold p-3">
      Modules Catalog
    </div>
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 rounded-r-lg m-5 p-3"
    >
      <div
        class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 rounded-r-lg m-2"
        v-for="(module, index) in modules"
        v-bind:item="module"
        v-bind:index="index"
        v-bind:key="module.id"
      >
        <div class="flex gap-0">
          <div class="grow m-3">
            <p
              class="text-left text-violet-900 text-3xl font-sans font-bold pl-1"
            >
              {{ module.name }}
            </p>
            <div class="flex justify-left gap-0 p-3">
              <div
                class="bg-violet-900 rounded-l-lg content-center p-2 text-white text-center"
              >
                Description
              </div>
              <div
                class="bg-white/25 rounded-r-lg content-center p-2 text-violet-900"
              >
                {{ module.description }}
              </div>
            </div>
            <button
              class="m-5 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
              v-on:click="addModule(module.id)"
            >
              Add this module
            </button>
            <button
              class="m-5 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
              v-on:click="goToLessons(module.id)"
            >
              View all lessons
            </button>
          </div>
          <div class="bg-violet-900 rounded-r-lg w-10"></div>
        </div>
      </div>
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
import ModuleService from "../ModuleService";
export default {
  name: "ModuleComponent",
  data() {
    return {
      modules: [],
      error: "",
      text: "",
    };
  },
  async created() {
    this.modules = await ModuleService.getModules(this.$route.params.id);
  },
  methods: {
    async addModule(mid) {
      await ModuleService.addModule(mid, this.$route.params.id);
      this.modules = await ModuleService.getModules(this.$route.params.id);
    },
    goToLessons(id) {
      this.$router.push(`/${id}/lessons`);
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
</style>
