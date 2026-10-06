function Button1() {
    function tampilkanPesan() {
        alert("Button berhasil di klik");
    }
    return (
        <div>
        <h2>belajar event</h2>
        <button onClick={tampilkanPesan}>Klik sana</button>
        </div>
    );
}
export default Button1;