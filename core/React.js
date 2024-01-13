
const createTextNode = (value) => {
  return {
    type: 'textNode',
    props: {
      nodeValue: value
    }
  }
}

const createElement = (type, props, ...children) => {
  return {
    type: type === 'textNode' ? 'textNode' : type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === 'string' ? createTextNode(child) : child
      })
    },
  }
}

const render = (elOption, container) => {
  const { type, props } = elOption
  const element = type === 'textNode'
    ? document.createTextNode('')
    : document.createElement(type)

  Object.entries(props).forEach(([key, value]) => {
    if (key !== 'children') element[key] = value
    else value.forEach(child => render(child, element))
  })

  container.append(element)
}


export default {
  createElement,
  render,
}