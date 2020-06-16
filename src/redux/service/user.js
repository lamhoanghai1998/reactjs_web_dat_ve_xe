import Axios from "axios";

class userService {
    dangNhap(user){
        console.log(user);
        return Axios({
            method:"POST",
            url:'https://appdatvexe.herokuapp.com/api/login',
            data:user
        })
    }
}
export default userService;