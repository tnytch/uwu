window.onload = () => { uwu.do("q"); };
const uwu = {
    v: new Map(),
    do(wat) {
        if (wat == "q") { // query
            let q = [...document.querySelectorAll("uwu")];
            q.forEach(i => {
                this.v.set(i.id, {"v": i.textContent, "a": [i]});
                this.be(i.id);
            });
            let refs = [...document.querySelectorAll("[_uwu]")];
            refs.forEach(ref => {
                let r = ref.getAttribute("_uwu");
                this.v.get(r).a.push(ref);
                if (ref.tagName == "INPUT") {
                    ref.addEventListener("input", () => {
                        if (ref.type == "checkbox") globalThis[r] = ref.checked;
                        else globalThis[r] = ref.value;
                    });
                }
            });
            this.do("u");
        } else if (wat == "u") { // update
            this.v.values().forEach(v => {
                v.a.forEach(area => { this.up(area, v.v); });
            });
        }
    },
    up(wat, wit) {
        if (wat.tagName == "INPUT") {
            if (wat.type == "checkbox") wat.checked = wit;
            else wat.value = wit;
        } else wat.textContent = wit;
    },
    be(wat) {
        Object.defineProperty(globalThis, wat, {
            get() { return uwu.v.get(wat).v; },
            set(val) {
                if (uwu.v.get(wat).v === val) return;
                uwu.v.get(wat).v = val;
                uwu.v.get(wat).a.forEach(area => { uwu.up(area, val) });
            }
        });
    }
};