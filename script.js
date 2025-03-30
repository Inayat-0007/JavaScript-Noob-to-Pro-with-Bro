function handleOperation() {
    const input1 = document.getElementById("input1").value.trim();
    const input2 = document.getElementById("input2").value.trim();
    const resultsContainer = document.getElementById("results-container");
    const errorContainer = document.getElementById("error-container");

    resultsContainer.innerHTML = "";
    errorContainer.classList.add("hidden");

    if (!input1 || !input2) {
        errorContainer.textContent = "❌ Both input fields are required";
        errorContainer.classList.remove("hidden");
        return;
    }

    let results = [];

    try {
        const num1 = Number(input1);
        const num2 = Number(input2);
        if (!isNaN(num1) && !isNaN(num2)) {
            results.push(`➕ Addition: ${num1} + ${num2} = ${num1 + num2}`);
            results.push(`➖ Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
            results.push(`✖️ Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
            results.push(`➗ Division: ${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
        } else {
            results.push("⚠️ Cannot perform number operations with these inputs");
        }
    } catch {
        results.push("⚠️ Error in number operations");
    }

    results.push(`🔗 String Concatenation: "${input1}" + "${input2}" = "${input1 + input2}"`);
    results.push(`📏 String Length: "${input1}" = ${input1.length}, "${input2}" = ${input2.length}`);

    try {
        const obj = { prop1: input1, prop2: input2 };
        results.push(`🛠 Object: ${JSON.stringify(obj)}`);
    } catch {
        results.push("⚠️ Could not create object");
    }

    try {
        const arr = [input1, input2];
        results.push(`📦 Array: ${JSON.stringify(arr)}`);
        results.push(`📏 Array Length: ${arr.length}`);
    } catch {
        results.push("⚠️ Could not create array");
    }

    results.forEach(result => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result-card");
        resultDiv.textContent = result;
        resultsContainer.appendChild(resultDiv);
    });
}

function handleReset() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("results-container").innerHTML = "";
    document.getElementById("error-container").classList.add("hidden");
}
