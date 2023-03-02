export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.element = elemento;
        }
        else {
            throw Error('Seletor não existe no DOM!');
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
