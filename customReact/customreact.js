function customRender(reactElement, mainContainer){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.prop.href)
    domElement.setAttribute('target', reactElement.prop.target)

    mainContainer.appendChild(domElement)*/
    

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    prop: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit "Google"'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)