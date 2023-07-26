let instance;

class ArendaAmoWidget {
    constructor(widget, deps) {
        if (instance) {
            return instance;
        }

        instance = this;

        this.widget = widget;
        this.deps = deps;
    }

    render() {
        console.log('ArendaAmoWidget: render');
    }
}

window.ArendaAmoWidget = ArendaAmoWidget;