## Introduction
React native like other platforms offers various life cycle for creating, updating and terminating your components. Here is a quick overview of the states.

## Mounting
These below methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()
## Updating
An update when needed can be caused by changes to the props or the state. The below methods are called in the following order when a component is being re-rendered:

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()
## Unmounting
This method is called when a component is being removed from the DOM:

- componentWillUnmount()
## Error Handling
This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

- componentDidCatch()
Note: Instance properties can be set by using props or state.
