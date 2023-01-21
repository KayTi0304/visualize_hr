<template>
  <div
    class="h-screen block bg-gradient-to-br from-blue-300 via-pink-300 to-indigo-500"
  >
    <h1 class="pt-7 text-white font-semibold">Company Sign In Page</h1>
    <div class="flex h-64">
      <label
        for="sign-in"
        class="container bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 rounded-lg m-5 w-2/5 text-white flex justify-center items-center"
        >Welcome back for more awesomeness.
      </label>
      <div
        class="grow bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 rounded-lg m-5 pt-7 grid grid-cols-2 gap-3 p-5"
      >
        <input
          type="text"
          id="sign-in-company"
          v-model="name"
          placeholder="name"
          class="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-b border-white placeholder:text-white"
        />
        <input
          type="text"
          id="sign-in-company"
          v-model="password"
          placeholder="password"
          class="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-b border-white placeholder:text-white"
        />
        <button
          class="bg-white/25 w-32 h-16 rounded-lg text-white font-semibold shadow-xl shadow-indigo-400/25"
          v-on:click="signInCompany()"
        >
          Sign In!
        </button>
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
import CompanyService from "../CompanyService";
export default {
  name: "CompanySIComponent",
  data() {
    return {
      error: "",
      text: "",
    };
  },
  methods: {
    async signInCompany() {
      const companies = await CompanyService.getCompanies();
      var companyId = -1;
      for (let company of companies) {
        if (company.name === this.name && company.password === this.password) {
          companyId = company.id;
          break;
        }
      }
      if (companyId != -1) {
        this.$router.push(`company/${companyId}`);
      }
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

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: 3bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
