window.onload = () => { uwu.do("q"); };
const uwu = {
    v: new Map(),
    to(q, t) {
        let qu = [...document.querySelectorAll(q)];
        qu.forEach(th => {
            this.v.set(th.getAttribute(`_${t}`), {"t": t, "v": th.textContent, "a": [th]});
            this.be(th.getAttribute(`_${t}`));
        });
    },
    do(wat) {
        if (wat == "q") { // query
            this.to("uwu[_num]", "num");
            this.to("uwu[_str]", "str");
            this.to("uwu[_boo]", "boo");
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