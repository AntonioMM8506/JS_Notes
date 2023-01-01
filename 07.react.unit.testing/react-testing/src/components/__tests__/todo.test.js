import { render, screen, cleanup } from '@testing-library/react'

// Import the component that we are going to test
import Todo from './../todo'

// We need to clean our rendering method after each test
afterEach(() => {
  cleanup()
})

// The most basic test we can do
test('should render non-completed Todo component', () => {
  // Let's mock data for our Todo component
  const todoData = { id: 1, title: 'my task', complete: false }
  render(<Todo { ...todoData }/>)
  const todoElement = screen.getByTestId('todo-1')

  // We are just testing if the component was rendered
  expect(todoElement).toBeInTheDocument()

  // We can also check if an specific text got render
  expect(todoElement).toHaveTextContent('my task')
})

test('should render completed Todo component', () => {
  // Let's mock data for our Todo component
  const todoData = { id: 2, title: 'wash car', complete: true }
  render(<Todo { ...todoData }/>)
  const todoElement = screen.getByTestId('todo-2')

  // We are just testing if the component was rendered
  expect(todoElement).toBeInTheDocument()

  // We can also check if an specific text got render
  expect(todoElement).toHaveTextContent('wash car')

  // Let's check the snapshot
  expect(todoElement).toMatchSnapshot()
})