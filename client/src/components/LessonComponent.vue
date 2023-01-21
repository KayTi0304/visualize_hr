<template>
  <div
    class="h-screen bg-gradient-to-br from-blue-300 via-pink-300 to-indigo-500"
    style="overflow: auto"
  >
    <div class="text-left text-white text-7xl font-sans font-bold p-3">
      {{ module.name }} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {{ marks }}
    </div>
    <div
      class="p-3"
      v-for="(lesson, index) in lessons"
      v-bind:item="lesson"
      v-bind:index="index"
      v-bind:key="lesson.id"
    >
      <div
        class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 rounded-lg m-5"
      >
        <div
          class="bg-fuchsia-400 bg-opacity-50 rounded-t-lg text-left font-semibold text-2xl text-white p-3"
        >
          Lesson {{ index + 1 }}
        </div>
        <hr />
        <p class="p-3">{{ lesson.description }}</p>
        <div class="grid grid-cols-2 justify-around">
          <div class="p-3 flex gap-0">
            <div
              class="bg-fuchsia-900 rounded-l-lg content-center p-2 text-white"
            >
              Question
            </div>
            <div
              class="bg-white/25 rounded-r-lg content-center p-2 text-fuchsia-900"
            >
              {{ lesson.question }}
            </div>
          </div>
          <div class="grid grid-cols-2 gap-24 justify-center p-2">
            <button
              v-on:click="checkCorrect(lesson.answer, 'T', idx)"
              class="m-5 p-2 bg-pink-500/25 rounded-lg text-white font-semibold shadow-xl shadow-pink-400/25 content-center"
            >
              True
            </button>
            <button
              v-on:click="checkCorrect(lesson.answer, 'F', idx)"
              class="m-5 p-2 bg-blue-500/25 rounded-lg text-white font-semibold shadow-xl shadow-blue-400/25 content-center"
            >
              False
            </button>
          </div>
        </div>
      </div>
    </div>
    <p class="error" v-if="error">{{ error }}</p>
    <button
      class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center"
      v-on:click="goBack()"
    >
      Go Back
    </button>
  </div>
</template>

<script>
import ModuleService from "@/ModuleService";
import LessonService from "../LessonService";
export default {
  name: "LessonComponent",
  data() {
    return {
      lessonsDone: [],
      marks: 0,
      lessons: [],
      module: {},
      error: "",
    };
  },
  async created() {
    this.module = await ModuleService.getModuleById(this.$route.params.id);
    this.lessons = await LessonService.getLessons(this.$route.params.id);
  },
  methods: {
    checkCorrect(sol, ans, idx) {
      if (this.lessonsDone.includes(idx)) {
        alert("You have finished this lesson.");
        return;
      }
      if (sol === ans) {
        alert("You are correct!");
        this.marks++;
        this.lessonsDone.push(idx);
      } else {
        alert("Wrong! Try again.");
      }
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
