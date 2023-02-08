import { useAuth } from "../../context/authContext";


const Navbar = () => {

    const { loginWithGoogle, user, logout} = useAuth();

    const handleGoogleSignin = async () => {
        try {
          await loginWithGoogle();
          console.log("Logged")
        } catch (error) {
          console.log(error.message);
        }
      };

      const handleLogout = async() =>{
        try{
        await logout()
    
      }catch(error){
    
        console.error(error);
    
      }
    
    }

    return(
        <div className="flex flex-row fixed bg-white h-[70px] w-full px-12 py-3 justify-items-stretch">
                <h1 className="text-2xl font-bold uppercase my-auto">ESATONLINE</h1>
                <div className="flex w-full pt-2 gap-6 my-auto justify-center">
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                    <p>Link 4</p>
                </div>
                <button 
                className="w-36 mb-2 my-auto py-2 px-6 border border-black text-black hover:text-white hover:bg-black text-base rounded-lg shadow hover:shadow-lg outline-none focus:outline-none"
                onClick={handleGoogleSignin}
                type="button">
                Sign Up
                </button>
                <button className="ml-4" onClick={ handleLogout }>
                Logout
                </button> 

      </div>
          )

}

export default Navbar