import Axios from "axios";


class userService {
    signIn(user) {
        return Axios({
            method: "POST",
            url: "https://appdatvexe.herokuapp.com/api/login",
            data: user
        })
    }
}

export default userService;