import axios from "axios";

const url = "http://localhost:5000/api/company/";

class CompanyService {
    //get employees
    static getCompanies() {
        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then((res) => {
                    const data = res.data;
                    resolve(
                        data.map((company) => ({
                            ...company,
                            createdAt: new Date(company.createdAt),
                        }))
                    );
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    static getCompanyById(id) {
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

    static getCompanyEmployees(id) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${url}employs/${id}`)
                .then((res) => {
                    const data = res.data;
                    resolve(data.map((employee) => ({...employee })));
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    static getCompanyModules(id) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${url}offers/${id}`)
                .then((res) => {
                    const data = res.data;
                    resolve(data.map((module) => ({...module })));
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    //create company
    static insertCompany(
        name,
        password,
        address,
        businessType,
        description,
        phone
    ) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, {
                    name,
                    address,
                    businessType,
                    description,
                    phone,
                    password,
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
    static deleteCompany(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default CompanyService;