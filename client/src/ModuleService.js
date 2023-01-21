import axios from "axios";

const url = "http://localhost:5000/api/module";

class ModuleService {
    //get all modules
    static getModules(cid) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${url}/company/${cid}`)
                .then((res) => {
                    const data = res.data;
                    resolve(
                        data.map((module) => ({
                            ...module,
                        }))
                    );
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    //get one module
    static getModuleById(id) {
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

    //add one module
    static addModule(mid, cid) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${url}/${mid}`, {
                    cid,
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
}

export default ModuleService;