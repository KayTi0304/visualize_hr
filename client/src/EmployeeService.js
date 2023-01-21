import axios from "axios";

const url = "http://localhost:5000/api/employee/";

class EmployeeService {
    //get employees
    static getEmployees() {
        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then((res) => {
                    const data = res.data;
                    resolve(
                        data.map((employee) => ({
                            ...employee,
                            createdAt: new Date(employee.createdAt),
                        }))
                    );
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    static getEmployeeById(id) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${url}/${id}`)
                .then((res) => {
                    const data = res.data;
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    static getEmployeeCompany(id) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${url}employs/${id}`)
                .then((res) => {
                    const data = res.data;
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    // get employee's modules
    static getEmployeeModules(id) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${url}takes/${id}`)
                .then((res) => {
                    const data = res.data;
                    resolve(data.map((module) => ({...module })));
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    //create employee
    static insertEmployee(
        firstName,
        lastName,
        email,
        password,
        date,
        companyName
    ) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, {
                    firstName,
                    lastName,
                    email,
                    enrollDate: String(
                        `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                    ),
                    password,
                    companyName,
                })
                .then((res) => {
                    const data = res.data;
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    //delete posts
    static deleteEmployee(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default EmployeeService;