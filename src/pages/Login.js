import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import {Link, useNavigate} from "react-router-dom";
import {AuthContextProvider, UserAuth} from "../config/auth-context";
import { onAuthStateChanged } from "firebase/auth";
import Links from "./components/Links";

const Login = () => {

    const {signIn} = UserAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("")
            await signIn(email, password)
            console.log(auth?.currentUser?.email);
            if (auth?.currentUser) {
                navigate("/dash")
            }
        } catch (e) {
            setError("Failed to log in")
            console.error(e)
            alert(e)
        }
    }

  return(
          <div className="container-fluid ">
              <div className="row justify-content-center align-items-center min-vh-100 body-bg-tertiary">
                  <div className="col-12 col-md-6 col-lg-4 mx-auto my-16 p-4 border text-bg-light">

                      <div className="card-body ">
                          <form id="login-form" onSubmit={handleSubmit}>
                              <h1 className="text-center text-3xl text-bg-light">Login</h1>
                              <div className="mb-3">
                                  <label htmlFor="inputEmail" className="form-label text-bg-light">
                                      Email Address
                                  </label>
                                  <input
                                      type="email"
                                      className="form-control text-bg-light border border-dark border-3"
                                      id="inputEmail"
                                      aria-describedby="emailHelp"
                                      onChange={(e) => setEmail(e.target.value)}
                                      style={{ borderRadius: '10px' }}
                                  />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="inputPassword" className="form-label text-bg-light">
                                      Password
                                  </label>
                                  <input
                                      type="password"
                                      className="form-control text-bg-light border border-dark border-3"
                                      id="inputPassword"
                                      onChange={(e) => setPassword(e.target.value)}
                                      style={{ borderRadius: '10px' }}
                                  />
                              </div>
                              <div className="text-center">
                                  <button
                                      type="submit"
                                      className={`btn btn-outline-success ${''} btn-login`}
                                      //onClick={handleSubmit}
                                      style={{ borderRadius: '10px' }}
                                  >
                                      Log In
                                  </button>
                                  <div className="mb-3"></div>
                                  <button
                                      type="button"
                                      className={`btn btn-outline-primary ${''} btn-signup`}
                                      //onClick={handleSubmitTwo}
                                      style={{ borderRadius: '10px' }}
                                  >
                                      Create An Account
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    )
}

export default Login