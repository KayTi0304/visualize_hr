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
      v-on:click="addOneModule()"
    >
      Add
    </button>
    <div v-if="addModuleYes">
      <input
        type="text"
        id="create-module"
        v-model="moduleName"
        placeholder="Module Name"
        class="appearance-none bg-transparent text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-b border-white placeholder:text-white" :readonly="moduleEdit"
      />
      <input
        type="text"
        id="create-module"
        v-model="moduleDescription"
        placeholder="Module Description"
        class="appearance-none bg-transparent text-white mr-3 w-4/5 py-1 px-2 leading-tight focus:outline-none border-b border-white placeholder:text-white" :readonly="moduleEdit"
      />
      <button
        class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
        v-on:click="saveModule()"
      >
        Save
      </button>
      <button
        class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
        v-on:click="addLesson()"
      >
        Add a lesson
      </button>
      <div v-if="addLessonYes">
        <input
          type="text"
          id="description"
          v-model="description"
          placeholder="Lesson Description"
          class="appearance-none bg-transparent text-white w-2/6 m-3 py-1 px-2 leading-tight focus:outline-none border-b border-white placeholder:text-white"
        />
        <input
          type="text"
          id="question"
          v-model="question"
          placeholder="Question"
          class="appearance-none bg-transparent text-white w-2/6 m-3 py-1 px-2 leading-tight focus:outline-none border-b border-white placeholder:text-white"
        />
        <input
          type="text"
          id="answer"
          v-model="answer"
          placeholder="Answer (T/F)"
          class="appearance-none bg-transparent text-white m-3 py-1 px-2 leading-tight focus:outline-none border-b border-white placeholder:text-white"
        />
        <button v-on:click="saveLesson()" class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2">Save Lesson</button>
      </div>
    </div>
    <p class="error" v-if="error">{{ error }}</p>
    <div v-for="e in lessons" :key="e.description" class="text-white">
      {{ e.description }}, {{e.question}}, {{e.answer}}
    </div>
    <button 
      class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
      v-on:click="saveModuleToBackend()">
      Save Module!
    </button>
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
      module: {},
      lessons: [],
      addModuleYes: false,
      addLessonYes: false,
      moduleEdit: false,
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
      this.addModuleYes = !this.addModuleYes;
    },
    saveModule() {
      this.module = {
        name: this.moduleName,
        description: this.moduleDescription,
      }
      this.moduleEdit = !this.moduleEdit
    },
    addLesson() {
      this.addLessonYes = !this.addLessonYes;
    },
    saveLesson() {
      this.lessons.push({
        description: this.description,
        question: this.question,
        answer: this.answer
      })
      this.addLessonYes = !this.addLessonYes
      this.description = ""
      this.question = ""
      this.answer = ""
      console.log("lessons: ", this.lessons)
    }, 
    saveModuleToBackend() {
      
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
