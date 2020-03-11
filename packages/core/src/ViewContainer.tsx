import { BaseComponent } from './vdom-util'
import { ComponentChildren, Ref, h } from './vdom'
import { CssDimValue } from './scrollgrid/util'


export interface ViewContainerProps {
  vGrow?: boolean
  height?: CssDimValue
  aspectRatio?: number
  onClick?: (ev: Event) => void
  elRef?: Ref<HTMLDivElement>
  children?: ComponentChildren
}


// TODO: do function component?
export default class ViewContainer extends BaseComponent<ViewContainerProps> {

  render(props: ViewContainerProps) {
    let classNames = [ 'fc-view-container' ]
    let height: CssDimValue = ''
    let paddingBottom: CssDimValue = ''

    if (props.aspectRatio || props.vGrow || props.height) {
      classNames.push('fc-view-container--absview')
    }

    if (props.aspectRatio) {
      paddingBottom = (1 / props.aspectRatio) * 100 + '%'
    } else {
      height = props.height || ''
    }

    return (
      <div
        ref={props.elRef}
        onClick={props.onClick}
        class={classNames.join(' ')} style={{ height, paddingBottom }}
      >{props.children}</div>
    )
  }

}