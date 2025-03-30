function runDemo() {
    let output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output

    // Only two variables allowed
    let var1 = document.getElementById('input1').value;
    let var2 = document.getElementById('input2').value;

    // Handle empty input
    if (!var1 || !var2) {
        output.innerHTML = "Error: Please provide both inputs.\nReason: Variables need values to demonstrate their importance.";
        return;
    }

    // Test 1: Hoisting (using var inside a function)
    output.innerHTML += "--- Test Hoisting ---\n";
    try {
        function hoistTest() {
            output.innerHTML += `Before declaration: ${typeof hoistedVar}\n`; // undefined due to hoisting
            var hoistedVar = var1;
            output.innerHTML += `After declaration: ${hoistedVar}\n`;
        }
        hoistTest();
        output.innerHTML += "Reason: 'var' is hoisted to the top of its scope, initialized as undefined.\n\n";
    } catch (e) {
        output.innerHTML += `Error: ${e.message}\nReason: Unexpected issue in hoisting test.\n\n`;
    }

    // Test 2: Scope (block scope with let)
    output.innerHTML += "--- Test Scope ---\n";
    try {
        if (true) {
            let scopedVar = var1;
            output.innerHTML += `Inside block: ${scopedVar}\n`;
        }
        output.innerHTML += `Outside block: ${typeof scopedVar === 'undefined' ? 'undefined' : scopedVar}\n`;
        output.innerHTML += "Reason: 'let' is block-scoped, so it's not accessible outside the block.\n\n";
    } catch (e) {
        output.innerHTML += `Error: ${e.message}\nReason: Unexpected issue in scope test.\n\n`;
    }

    // Test 3: Type Coercion
    output.innerHTML += "--- Test Type Coercion ---\n";
    try {
        let result = var1 + var2; // Implicit coercion
        output.innerHTML += `Result of var1 + var2: ${result}\n`;
        output.innerHTML += `Type of result: ${typeof result}\n`;
        output.innerHTML += "Reason: JavaScript coerces types (e.g., number + string becomes string concatenation).\n\n";
    } catch (e) {
        output.innerHTML += `Error: ${e.message}\nReason: Unexpected issue in type coercion test.\n\n`;
    }

    // Test 4: Mutability (using var2 as an object)
    output.innerHTML += "--- Test Mutability ---\n";
    try {
        const obj = { value: var2 };
        output.innerHTML += `Original object value: ${obj.value}\n`;
        obj.value = "mutated"; // Allowed despite const
        output.innerHTML += `Mutated object value: ${obj.value}\n`;
        output.innerHTML += "Reason: 'const' prevents reassignment of the variable, but object properties can still change.\n\n";
    } catch (e) {
        output.innerHTML += `Error: ${e.message}\nReason: Unexpected issue in mutability test.\n\n`;
    }

    // Test 5: Temporal Dead Zone (TDZ)
    output.innerHTML += "--- Test TDZ ---\n";
    try {
        function tdzTest() {
            output.innerHTML += `Before declaration: ${typeof tdzVar === 'undefined' ? 'in TDZ' : tdzVar}\n`;
            let tdzVar = var1; // TDZ ends here
            output.innerHTML += `After declaration: ${tdzVar}\n`;
        }
        tdzTest();
        output.innerHTML += "Reason: 'let' variables are hoisted but not initialized until their declaration (TDZ).\n";
    } catch (e) {
        output.innerHTML += `Error: ${e.message}\nReason: TDZ prevents access before declaration.\n`;
    }
}