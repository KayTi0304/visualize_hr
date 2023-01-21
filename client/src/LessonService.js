import axios from "axios";

const url = "http://localhost:5000/api/lesson";

class LessonService {
    //get all lessons
    static getLessons(mid) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${url}/module/${mid}`)
                .then((res) => {
                    const data = res.data;
                    resolve(
                        data.map((lesson) => ({
                            ...lesson,
                        }))
                    );
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

export default LessonService;