import Account from "../component/account";
import Logincontextprovider from "../context/logincontextprovider";

function Login(){
    return(<Logincontextprovider>
        <Account></Account>
        </Logincontextprovider>
    );
}

export default Login