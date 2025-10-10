import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ShoppingComponent from "./ShoppingComponent";
function HTML() {
    return (
        <>
            <main>
                <h2>HTML</h2>
                <p>it's a markup language</p>
            </main>
        </>
    )
}
function CSS() {
    return (
        <>
            <main>
                <h2>CSS</h2>
                <p>CSS stands for cascading style sheet</p>
            </main>
        </>
    )
}

function JS() {
    return (
        <>
            <main>
                <h2>JavaScript</h2>
                <p>JavaScript is a high level programming language </p>
            </main>
        </>
    )
}
export default function SPARoute() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">JS</Link></li>
                        <li><Link to="/shopping">Shopping</Link></li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="/shopping" element={
                        <ShoppingComponent />
                    } />

                    <Route path="/html" element={
                        <HTML />
                    } />


                    <Route path="/css" element={
                        <CSS />
                    } />


                    <Route path="/js" element={
                        <JS />
                    } />

                    {/* wild-card-router "*" */}
                    <Route path="*" element={
                        <main>
                            <code>Page Not Found: You'r requested page not found</code>
                        </main>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}