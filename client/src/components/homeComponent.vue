<template>
  <div
    class="h-screen flex justify-center items-center bg-gradient-to-br from-sky-300 via-pink-300 to-indigo-500"
  >
    <div
      class="bg-red absolute inset-x-0 top-0 pt-10 font-sans text-8xl font-bold tracking-wide text-white/75 content-center"
    >
      <div class="container mx-auto box-border justify-self-center">
        VisualizeHR
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <button
        class="bg-white/25 p-4 rounded-lg text-white font-semibold shadow-xl shadow-pink-400/50"
        v-on:click="toSignUpEmployee()"
      >
        Sign Up as Employee
      </button>
      <button
        class="bg-white/25 p-4 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/50"
        v-on:click="toSignUpCompany()"
      >
        Sign Up as Company
      </button>
      <button
        class="bg-white/25 p-4 rounded-lg text-white font-semibold shadow-xl shadow-pink-400/50"
        v-on:click="toSignInEmployee()"
      >
        Sign In as Employee
      </button>
      <button
        class="bg-white/25 p-4 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/50"
        v-on:click="toSignInCompany()"
      >
        Sign In as Company
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  methods: {
    toSignUpEmployee() {
      this.$router.push("/sign-up-employee");
    },
    toSignUpCompany() {
      this.$router.push("/sign-up-company");
    },
    toSignInEmployee() {
      this.$router.push("/employee");
    },
    toSignInCompany() {
      this.$router.push("/company");
    },
  },
};
</script>

<style scoped></style>
