import axios from "axios";

axios.defaults.baseURL = "https://hello-there-2cedc687affc.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;