<template>
  <div class="bg-gradient-to-br from-blue-300 via-pink-300 to-indigo-500">
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-200 rounded-lg"
    >
      <div class="flex flex-row pb-2">
        <div class="basis-1/3 pt-2">
          <div class="text-lg font-bold text-white">Welcome Back</div>
          <div class="text-indigo-900 font-semibold">
            {{ employee.firstName }} {{ employee.lastName }}
          </div>
          <button
            class="p-1 bg-white/25 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center"
            v-on:click="goBack()"
          >
            Go Back
          </button>
        </div>
        <div class="basis-2/3 bg-blue pt-2">
          <div class="flex justify-around">
            <div class="flex gap-0">
              <div
                class="bg-indigo-400 rounded-l-lg content-center p-1 text-white"
              >
                Email
              </div>
              <div
                class="bg-white/25 rounded-r-lg content-center p-1 text-indigo-400"
              >
                {{ employee.email }}
              </div>
            </div>
            <div class="flex gap-0">
              <div
                class="bg-indigo-400 rounded-l-lg content-center p-1 text-white"
              >
                Company
              </div>
              <div
                class="bg-white/25 rounded-r-lg content-center p-1 text-indigo-400"
              >
                {{ company.name }}
              </div>
            </div>
            <div class="flex gap-0">
              <div
                class="bg-indigo-400 rounded-l-lg content-center p-1 text-white"
              >
                EnrollDate
              </div>
              <div
                class="bg-white/25 rounded-r-lg content-center p-1 text-indigo-400"
              >
                {{ employee.enrollDate }}
              </div>
            </div>
          </div>
          <p class="pt-2 text-indigo-900">
            Instructions: Move your avatar to each house to check out a module.
            Move with WASD and hit Enter.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <CanvasComponent v-if="loaded" v-bind:modules="modules" />
  </div>
</template>

<script>
import EmployeeService from "../EmployeeService";
import CanvasComponent from "./CanvasComponent.vue";

export default {
  name: "EmployeeUserComponent",
  components: {
    CanvasComponent,
  },
  data() {
    return {
      employee: {},
      company: {},
      modules: [],
      error: "",
      text: "",
      loaded: false,
    };
  },
  async created() {
    try {
      this.employee = await EmployeeService.getEmployeeById(
        this.$route.params.id
      );
      this.company = await EmployeeService.getEmployeeCompany(
        this.$route.params.id
      );
      this.modules = await EmployeeService.getEmployeeModules(
        this.$route.params.id
      );
      this.loaded = true;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
