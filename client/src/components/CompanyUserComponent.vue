<template>
  <div
    class="h-screen bg-gradient-to-br from-blue-300 via-pink-300 to-indigo-500"
    style="overflow: auto"
  >
    <div class="text-left text-white text-7xl font-sans font-bold p-3">
      Welcome Back, {{ company.name }}.
    </div>
    <div class="p-3 grid grid-cols-3 gap-4">
      <div class="p-3 flex gap-0">
        <div class="bg-violet-900 rounded-l-lg content-center p-2 text-white">
          Address
        </div>
        <div
          class="bg-white/25 rounded-r-lg content-center p-2 text-violet-900"
        >
          {{ company.address }}
        </div>
      </div>
      <div class="p-3 flex gap-0">
        <div class="bg-violet-900 rounded-l-lg content-center p-2 text-white">
          Business Type
        </div>
        <div
          class="bg-white/25 rounded-r-lg content-center p-2 text-violet-900"
        >
          {{ company.businessType }}
        </div>
      </div>
      <div class="p-3 flex gap-0">
        <div class="bg-violet-900 rounded-l-lg content-center p-2 text-white">
          Phone
        </div>
        <div
          class="bg-white/25 rounded-r-lg content-center p-2 text-violet-900"
        >
          {{ company.phone }}
        </div>
      </div>
    </div>
    <div class="pl-6 h-24 flex gap-0 content-center p-3">
      <div
        class="bg-violet-900 rounded-l-lg content-center p-2 text-white w-1/5"
      >
        Description
      </div>
      <div
        class="bg-white/25 rounded-r-lg content-center p-2 text-violet-900 text-center w-3/5"
      >
        {{ company.description }}
      </div>
    </div>
    <div
      class="text-left text-white text-4xl font-sans font-bold p-3 underline decoration-double decoration-violet-900"
    >
      Your Employees
    </div>
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 rounded-lg p-2 m-5"
    >
      <div
        class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 rounded-r-lg mb-3"
        v-for="(employee, index) in employees"
        v-bind:item="employee"
        v-bind:index="index"
        v-bind:key="employee.id"
      >
        <div class="flex gap-0 h-16 text-violet-900 text-left">
          <div class="grow grid grid-cols-2 gap-4">
            <div class="p-3 flex gap-0">
              <div
                class="bg-violet-900 rounded-l-lg content-center p-2 text-white"
              >
                First Name
              </div>
              <div
                class="bg-white/25 rounded-r-lg content-center p-2 text-violet-900"
              >
                {{ employee.firstName }}
              </div>
            </div>
            <div class="p-3 flex gap-0">
              <div
                class="bg-violet-900 rounded-l-lg content-center p-2 text-white"
              >
                Last Name
              </div>
              <div
                class="bg-white/25 rounded-r-lg content-center p-2 text-violet-900"
              >
                {{ employee.lastName }}
              </div>
            </div>
          </div>
          <div class="bg-violet-900 w-16 rounded-r-lg"></div>
        </div>
      </div>
    </div>
    <div
      class="text-left text-white text-4xl font-sans font-bold p-3 underline decoration-double decoration-violet-900"
    >
      Your Offered Modules
    </div>
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 rounded-lg p-2 m-5"
    >
      <div
        class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 rounded-r-lg mb-3"
        v-for="(module, index) in modules"
        v-bind:item="module"
        v-bind:index="index"
        v-bind:key="module.id"
      >
        <div class="flex gap-0 text-violet-900 text-left">
          <div class="grow grid grid-cols-2 gap-4">
            <div class="p-3 flex gap-0">
              <div
                class="bg-violet-900 rounded-l-lg content-center p-2 text-white"
              >
                Name
              </div>
              <div
                class="bg-white/25 rounded-r-lg content-center p-2 text-violet-900"
              >
                {{ module.name }}
              </div>
            </div>
            <div class="p-3 flex gap-0 justify-left">
              <div
                class="bg-violet-900 rounded-l-lg content-center p-2 text-white"
              >
                Description
              </div>
              <div
                class="bg-white/25 rounded-r-lg content-center p-2 text-violet-900"
              >
                {{ module.description }}
              </div>
            </div>
          </div>
          <div class="bg-violet-900 w-16 rounded-r-lg"></div>
        </div>
      </div>
    </div>
    <div class="gap-6 m-5 flex justify-center">
      <button
        class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
        v-on:click="goToModule()"
      >
        Search Modules
      </button>
      <button
        class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
      >
        Add Custom Modules
      </button>
      <button
        class="m-5 h-16 bg-white/25 w-32 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25 content-center p-2"
        v-on:click="goBack()"
      >
        Go Back
      </button>
    </div>
  </div>
</template>

<script>
import CompanyService from "../CompanyService";
export default {
  name: "CompanyUserComponent",
  data() {
    return {
      company: {},
      employees: [],
      modules: [],
      error: "",
      text: "",
    };
  },
  async created() {
    // dummy data
    /*
    this.company = {
      name: "Facebook",
      address: "Palo Alto, California",
      businessType: "Social Media",
      description: "Facebook is a rising social media company.",
      phone: "+1(765)123-4567",
    };
    this.employees = [
      {
        firstName: "John",
        lastName: "Doe",
      },
      {
        firstName: "Brittany",
        lastName: "Stars",
      },
      {
        firstName: "Jimmy",
        lastName: "Fallon",
      },
    ];
    this.modules = [
      {
        id: 1,
        name: "Engineering Ethics",
        description: "This is Engineering Ethics.",
      },
      {
        id: 2,
        name: "IDE Setup",
        description: "This is IDE Setup.",
      },
      {
        id: 3,
        name: "Effective Communication",
        description: "This Effective Communication.",
      },
    ];*/
    try {
      this.company = await CompanyService.getCompanyById(this.$route.params.id);
      this.employees = await CompanyService.getCompanyEmployees(
        this.$route.params.id
      );
      this.modules = await CompanyService.getCompanyModules(
        this.$route.params.id
      );
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    goToModule() {
      this.$router.push(`/${this.company.id}/modules`);
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
