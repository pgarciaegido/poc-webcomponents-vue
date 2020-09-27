import "../components/likvido-input/likvido-input";
import "./vue";

window.getInputValue = () => {
    const value = document.getElementById("input").value;
    const p = document.createElement("p");
    p.innerHTML = value;
    document.getElementById("native").appendChild(p);
};