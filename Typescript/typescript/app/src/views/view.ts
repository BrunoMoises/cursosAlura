export abstract class View<T> {

    protected element: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.element = elemento as HTMLElement;
        } else {
            throw Error('Seletor não existe no DOM!');
        }
    }

    update(model: T): void {
        let template = this.template(model);
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
}