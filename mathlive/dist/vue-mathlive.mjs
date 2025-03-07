/** MathLive 0.104.0 */
var l = {
    name: "mathlive-mathfield",
    template: '<math-field :id="id"><slot></slot></math-field>',
    props: {id: {type: String, default: ""}, value: {type: String, default: ""}},
    install(e, t) {
        e != null && e.version && +e.version.split(".")[0] >= 3 ? e.config.globalProperties.$mathlive = t : Object.defineProperty(e.prototype, "$mathlive", {value: t}), e.component("mathlive-mathfield", this)
    },
    watch: {
        value(e) {
            let t = this.$el.getValue();
            e !== t && this.$el.setValue(e, {silenceNotifications: !0})
        }
    },
    mounted() {
        this.$nextTick(() => {
        })
    },
    methods: {
        executeCommand(e) {
            this.$el.executeCommand(e)
        }, hasFocus() {
            return this.$el.hasFocus()
        }, focus() {
            this.$el.focus()
        }, blur() {
            this.$el.blur()
        }, getValue(e) {
            return this.$el.getValue(e)
        }, insert(e, t) {
            this.$el.insert(e, t)
        }, select() {
            this.$el.select()
        }
    }
};
export {l as default};
