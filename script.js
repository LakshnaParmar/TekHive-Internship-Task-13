document.getElementById('calculate-Love').addEventListener('click', function() {
    
    const name1 = document.querySelector('input[name="name-1"]').value;
    const name2 = document.querySelector('input[name="name-2"]').value;
    

    if (name1 === '' || name2 === '') {
        alert('Please fill in both names.');
        return;
    }

  
    const loveScore = calculateLovePercentage(name1, name2);
    
    // Display the result
    document.getElementById('result').innerHTML = `<h3>${name1} and ${name2} your love is  ${loveScore}% </h3>`;
    
});

function calculateLovePercentage(name1, name2) {
    // Combine the names
    const combinedNames = name1 + name2;
    let asciiTotal = 0;
    for (let i = 0; i < combinedNames.length; i++) {
        asciiTotal += combinedNames.charCodeAt(i);
    }
    const percentage = (asciiTotal % 100) + 1;

    return percentage;
}
