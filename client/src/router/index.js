import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/homeComponent.vue";
import EmployeeComponent from "../components/EmployeeComponent.vue";
import CompanyComponent from "../components/CompanyComponent.vue";
import EmployeeSIComponent from "../components/EmployeeSIComponent.vue";
import EmployeeUserComponent from "../components/EmployeeUserComponent.vue";
import CompanySIComponent from "../components/CompanySIComponent.vue";
import CompanyUserComponent from "../components/CompanyUserComponent.vue";
import ModuleComponent from "../components/ModuleComponent.vue";
import LessonComponent from "../components/LessonComponent.vue";
import AddModuleComponent from "../components/AddModuleComponent.vue";

const routes = [{
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
    },
    {
        path: "/sign-up-employee",
        name: "PostComponent",
        component: EmployeeComponent,
    },
    {
        path: "/sign-up-company",
        name: "CompanyComponent",
        component: CompanyComponent,
    },
    {
        path: "/employee",
        name: "EmployeeSIComponent",
        component: EmployeeSIComponent,
    },
    {
        path: "/employee/:id",
        name: "EmployeeUserComponent",
        component: EmployeeUserComponent,
    },
    {
        path: "/company",
        name: "CompanySIComponent",
        component: CompanySIComponent,
    },
    {
        path: "/company/:id",
        name: "CompanyUserComponent",
        component: CompanyUserComponent,
    },
    {
        path: "/:id/modules",
        name: "ModuleComponent",
        component: ModuleComponent,
    },
    {
        path: "/:id/add-modules",
        name: "AddModuleComponent",
        component: AddModuleComponent,
    },
    {
        path: "/:id/lessons",
        name: "LessonComponent",
        component: LessonComponent,
    },
];

// Create Vue Router Object
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;