import { BrowserRouter, Routes, Router, Link, Route } from "react-router-dom";
import Home from "./Home";
import Dashbord from "./Dashbord";
import Login from "./Login";
import Register from "./Register";
export default function Index() {
    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 m-2">
                <h1>IShop-Online store</h1>
            </header>
            <section className="mt-2 row">
                <BrowserRouter>
                    <nav className="col-3">
                        <div className="mb-2">
                            <Link className="btn btn-danger w-100" to="/home">Home</Link>
                        </div>
                        <div className="mb-2">
                            <Link className="btn btn-danger w-100" to="/dashbord">Dashbord</Link>
                        </div>
                        <div className="mb-2">
                            <Link className="btn btn-danger w-100" to="/login">Login</Link>
                        </div>
                        <div className="mb-2">
                            <Link className="btn btn-danger w-100" to="/register">Register</Link>
                        </div>

                    </nav>
                    <main className="col-9">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="home" element={<Home />} />
                            <Route path="dashbord" element={<Dashbord />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />

                        </Routes>
                    </main>
                </BrowserRouter>

            </section>
        </div>
    )
}