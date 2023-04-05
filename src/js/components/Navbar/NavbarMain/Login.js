import { LoginModal } from '../../element/Modal.js';
import { Component } from '/src/js/components/base/Component.js';

export class Login extends Component {
  constructor() {
    super('login');
    this.loginModalNode = new LoginModal().node;
    this.node.append(this.loginModalNode);
  }

  template() {
    return `
<span class="label-text">안녕하세요, 로그인</span>
<span class="main-text">계정 및 목록</span>
    `;
  }

  initEventHandlers() {
    setTimeout(() => this.showLoginModal(), 1000);
  }

  showLoginModal() {
    this.loginModalNode.show();
  }
}
