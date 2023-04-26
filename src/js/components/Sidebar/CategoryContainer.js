import { Component } from '../base/Component.js';
import Category from './Category.js';
import { categoryStore } from './categoryStore.js';

export default class CategoryContainer extends Component {
  constructor() {
    super('category-container');
    this.main = new Main();
    this.sub = new Sub();
    this.init();
  }

  renderSubCategory(id) {
    this.sub.render(id);
  }

  translateLeft() {
    this.node.classList.remove('translateX-right');
    this.node.classList.add('translateX-left-half');
  }

  translateRight() {
    this.node.classList.remove('translateX-left-half');
    this.node.classList.add('translateX-right');
  }

  getTemplate() {
    return [this.main.node, this.sub.node];
  }
}

class Main extends Component {
  constructor() {
    super('category-container__main');
    this.store = categoryStore;
    this.loadCategory();
  }

  async loadCategory() {
    await this.store.requestMainCategories();
    this.render();
  }

  getTemplate() {
    const mainCategories = this.store.getMainCategory();
    const categoryNodes = mainCategories.map((category) => new Category(category).node);
    return [...categoryNodes];
  }
}

class Sub extends Component {
  constructor() {
    super('category-container__sub');
    this.store = categoryStore;
    this.backList = new Component('back', 'LI');
    this.setBackList();
    this.loadCategory();
  }

  async loadCategory() {
    await this.store.requestSubCategories();
  }

  setBackList() {
    const templateElement = document.createElement('template');
    const literal = `<button></button><a href="#">주메뉴</a>`;
    templateElement.innerHTML = literal;
    this.backList.node.append(templateElement.content.cloneNode(true));
  }

  getTemplate(id) {
    const subCategories = this.store.getSubCategory();
    const details = subCategories[id];
    const categoryNodes = details.map((detail) => new Category(detail).node);

    return [this.backList.node, ...categoryNodes];
  }
}
