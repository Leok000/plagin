class DropDown{

    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.items = options.items
        this.$el.querySelector('.label').textContent = this.items[0].label
        this.$el.addEventListener('click', event => {
            if(event.target.classList.contains('label')) {
                this.open
                console.log(this);
            }
        })
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }
}

const dropdown = new DropDown('#dropdown', {
    items: [
        {label: "Moscow", id: "msk"},
        {label: "Petersburg", id: "spb"},
        {label: "New York", id: "nyk"},
        {label: "Dubai", id: "dub"}
    ]
})

