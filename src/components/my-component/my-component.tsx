import { Component, Prop, h, Method, EventEmitter, Event } from '@stencil/core';
import { getEventListenerPromise } from '../../utils/getEventListenerPromise';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() someEvent: EventEmitter<void>;

  @Method()
  async didDismiss() {
    return getEventListenerPromise(document.body, 'someEvent');
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
