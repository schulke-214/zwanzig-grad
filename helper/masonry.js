const setUnsetOptionsToDefault = ({
    itemSelector = 'masonry__item',
    columns = 2,
    transition = 0.25,
    ease = 'zwanzig-grad'
}) => ({
    itemSelector,
    columns,
    transition,
    ease
});

export class Masonry {
    constructor(container, options) {
        this.options = setUnsetOptionsToDefault(options);

        if (!(container instanceof Element || container instanceof HTMLDocument)) {
            throw new TypeError('Expected an HTMLElement as first parameter.');
        }

        this.container = container;
        this.elements = [...this.container.querySelectorAll(this.options.itemSelector)];

        this.columns = [];

        for (let i = 0; i < this.options.columns; i++) {
            this.columns[i] = new MasonryColumn();
        }

        this.mount();
    }

    mount = () => {
        addEventListener('resize', this.resize);
        addEventListener('onload', this.pack);
    }

    unmount = () => {
        removeEventListener('resize', this.resize);
        removeEventListener('onload', this.pack);
    }

    pack = () => {
        console.log("packed everything")
    }

    resize = () => {
        console.log("resize")
        console.log(this.elements)

        this.elements.map(el => {
            let insertableColumn = {
                height: Infinity,
                index: 0
            };

            for (let i = 0; i < this.columns.length; i++) {
                const height = this.columns[i].computeHeight();

                console.log("row ", i, " has a height of ", height);

                if (insertableColumn.height > height) {
                    insertableColumn.height = height;
                    insertableColumn.index = index;
                }
            }

            //     // this.columns[index % this.options.columns].push(el)
        });

        console.log(this.columns)
        // this.elements.map(el => console.log(absoluteHeight(el)))
    }
}

class MasonryColumn {
    childs = [];
    height = 0;

    push = el => {
        this.childs.push(el);
        this.computeHeight();
    }

    pop = () => {
        const el = this.childs.pop();
        this.computeHeight();

        return el;
    }

    computeHeight = () => {
        this.height = this.childs.reduce((height, el) => height + el.offsetHeight);

        return this.height;
    }
}