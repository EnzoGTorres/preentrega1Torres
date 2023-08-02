function Navbar() {
    return (
        <nav id="navbar" className="navb flex justify-between bg-emerald-900 text-white py-4 px-3 items-center">
            <h1>Valencia prendas</h1>
            <div id="navitem" className="navitem flex justify-end items-center gap-3">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <div>
                <i class="bi bi-cart4"></i>
                <span>1</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar