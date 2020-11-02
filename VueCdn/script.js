

new Vue ({
    el: "#app",
    data: {
        active: false
    },
    methods: {
        open() {
            this.active = true
        },
        close() {
            this.active = false
        },
        onCancel() {
            this.close()
        },
        onConfirm() {
            this.close()
        }
    }
})