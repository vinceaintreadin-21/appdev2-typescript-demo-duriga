(() => {
    // Literal Types (Alternative to Enum)
    let direction: 'up' | 'down' | 'left' | 'right' = 'up'

    direction = 'up'

    function navigation(nav: 'up' | 'down' | 'left' | 'right') {
        console.log('Navigating..' + nav)
    }

    navigation("up")
    navigation(direction)


    //Literal types are basically a picky version of data types, it's fixed and won't alternate once stated
    //One of the core benefits that it offers here is typo protection, this makes TypeScript detect the error immediately 
})