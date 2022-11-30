// Basic string literal
let click: 'click'

// This is valid
click = 'click'
// This is NOT valid
//click = 'doubleClick'

// A useful way to use string literals
let mouseEvent: 'click' | 'dbClick' | 'mouseUp' | 'mouseDown'
mouseEvent = 'dbClick'